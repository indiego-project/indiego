"use client";
import { useAsync } from "../../hooks/useAsync";
import { useThrottle } from "../../hooks/useThrottle";
import { average } from "color.js";
import {
  useState,
  useLayoutEffect,
  useRef,
  type MutableRefObject,
} from "react";
import { useAnimate } from "framer-motion";

export interface IPopularShowData {
  title: string;
  artist: string;
  url: string;
  location: string;
  date: string;
}

interface ISwiperProps {
  data: IPopularShowData[];
}

export interface ISwiperContentData extends IPopularShowData {
  color: string;
}

interface ISwiperContentProps {
  data: ISwiperContentData[];
}

interface ISwiperState {
  index: number;
  state: "init" | "working";
}

interface ISwiperData {
  current: ISwiperContentData;
}

// helper function for adding color value extracted from an image url
// if CORS happens while parsing urls, it crashes
const colorExtract = (urls: string[]) => {
  return urls.map(async (url) => {
    const color = await average(url, { format: "hex" });
    return color;
  });
};

// Wrapper for SwiperContent that takes care for handling datas (e.g. colroValue)
// Custom <Suspense> for Swiper component
export default function Swiper({ data }: ISwiperProps) {
  const urls = data.map((data) => data.url);
  const { status, result } = useAsync(() => colorExtract(urls), true);

  if (status === "success" && result) {
    const dataWithColros = data.map((data, idx) => {
      return {
        ...data,
        color: result[idx] as string,
      };
    });
    return <SwiperContent data={dataWithColros} />;
  } else {
    return <SwiperFallback />;
  }
}

// Actual Swiper Component
export const SwiperContent = ({ data }: ISwiperContentProps) => {
  // mouseevt delta for swiping logic
  const mouseDelta = useRef<number>(0);
  // touchevt delta for swiping logic
  const touchDelta = useRef<number>(0);
  const [isMoving, setIsMoving] = useState(false);
  const [scope, animate] = useAnimate();
  const [swiperState, setSwiperState] = useState<ISwiperState>({
    index: 0,
    state: "init",
  });
  const [swiperData, setSwiperData] = useState<ISwiperData>({
    current: data[0],
  });

  // swiping event handelr
  const indexHandler = (movement: number, delta: MutableRefObject<number>) => {
    if (movement < delta.current) {
      if (swiperState.index >= data.length - 1) {
        setSwiperState({ index: 0, state: "working" });
      } else {
        setSwiperState((prevState) => {
          return { index: prevState.index + 1, state: "working" };
        });
      }
    } else {
      if (swiperState.index <= 0) {
        setSwiperState({ index: data.length - 1, state: "working" });
      } else {
        setSwiperState((prevState) => {
          return { index: prevState.index - 1, state: "working" };
        });
      }
    }
  };

  // thorttle evt handler for mouse-evt
  const thorttledIndexHandler = useThrottle(indexHandler, 500);

  // animation sequence (Framer Motion)
  useLayoutEffect(() => {
    const { state, index } = swiperState;
    if (state !== "init") {
      animate(
        [
          ["#swiper-item", { opacity: 0, y: 10 }],
          ["#swiper-title", { opacity: 0, y: 10 }, { at: 0.2 }],
          [".swiper-content", { opacity: 0, y: 10 }, { at: "<" }],
        ],
        {
          duration: 0.3,
        }
      ).then(() => {
        setSwiperData({
          current: data[index],
        });
        animate(
          [
            ["#swiper-item", { opacity: 1, y: 0 }],
            ["#swiper-gradient", { backgroundColor: data[index].color }],
            ["#swiper-title", { opacity: 1, y: 0 }, { at: "<" }],
            [".swiper-content", { opacity: 1, y: 0 }, { at: "<" }],
          ],
          { duration: 0.3, delay: 0.1 }
        );
      });
    } else {
      animate([
        ["#swiper-item", { opacity: [0, 1] }],
        ["#swiper-title", { opacity: [0, 1] }, { at: "<" }],
        [".swiper-content", { opacity: [0, 1] }, { at: "<" }],
      ]);
    }
  }, [swiperState]);

  return (
    <div draggable={false} ref={scope} className="relative w-full h-[16rem]">
      <div
        onTouchStart={(e) => {
          touchDelta.current = e.changedTouches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (Math.abs(touchDelta.current - e.changedTouches[0].clientX) > 5) {
            thorttledIndexHandler(e.changedTouches[0].clientX, touchDelta);
            touchDelta.current = 0;
          }
        }}
        onMouseDown={(e) => {
          e.preventDefault();
          setIsMoving(true);
          mouseDelta.current = e.clientX;
        }}
        onMouseMove={(e) => {
          e.preventDefault();
          if (isMoving && Math.abs(mouseDelta.current - e.clientX) > 20) {
            thorttledIndexHandler(e.clientX, mouseDelta);
            setIsMoving(false);
          }
        }}
        onMouseUp={(e) => {
          e.preventDefault();
          setIsMoving(false);
          mouseDelta.current = 0;
        }}
        className={`relative flex justify-center h-full w-full z-30 ${
          isMoving ? "cursor-grabbing" : "cursor-grab"
        }`}>
        <div className="flex items-center w-full h-max">
          <div className="flex relative w-full h-max items-center justify-center">
            <img
              draggable={false}
              id="swiper-item"
              className="max-h-[180px] max-w-[150px] shadow-strong"
              src={swiperData.current.url}
              alt="posters"
            />
          </div>
        </div>
        <div className="absolute bottom-0 flex flex-col w-full h-max z-40 items-center text-white justify-center">
          <p className="text-xs mt-2">{`< ${swiperState.index + 1} / ${
            data.length
          } >`}</p>
          <p id="swiper-title" className="font-bold">
            {swiperData.current.title}
          </p>
          <p className="swiper-content text-xs">{swiperData.current.artist}</p>
          <p className="swiper-content text-xs font-light mt-1">
            {swiperData.current.location}
          </p>
          <p className="swiper-content text-xs font-light mt-1">
            {swiperData.current.date}
          </p>
        </div>
      </div>
      <div
        id="swiper-gradient"
        style={{
          backgroundColor: swiperData.current.color,
        }}
        className="w-full h-full absolute z-10 left-0 top-4 after:inline-block after:w-full after:h-full after:bg-gradient-to-b after:from-transparent after:from-30% after:to-black/50 after:z-20"></div>
    </div>
  );
};

export const SwiperFallback = () => {
  return <div className="w-32 h-32 bg-red-500"></div>;
};

Swiper.Content = SwiperContent;
Swiper.Fallback = SwiperFallback;
