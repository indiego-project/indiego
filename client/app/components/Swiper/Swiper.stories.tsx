import type { Meta } from "@storybook/react";
import { SwiperContent } from "./Swiper";

const meta: Meta<typeof SwiperContent> = {
  component: SwiperContent,
  decorators: [
    (Story) => (
      <div className="flex w-screen h-screen justify-center items-center bg-white">
        <div className="w-full max-w-mb_base">
          <Story />
        </div>
      </div>
    ),
  ],
  args: {},
};

export default meta;

export const DefaultSwiper = () => {
  const dummyShows = [
    {
      title: "나만의 공연",
      artist: "나만의 아티스트",
      location: "종로구 경복궁",
      date: "2023-08-09 ~ 08-07",
      url: "https://marketplace.canva.com/EADzX7uLktw/3/0/1131w/canva-%EA%B2%80%EC%9D%80%EC%83%89-%ED%95%98%EC%96%80%EC%83%89%EA%B3%BC-%EB%85%B8%EB%9E%80%EC%83%89-%EB%8B%A8%EC%88%9C%ED%95%9C-%EC%9E%90%EC%84%A0-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%BD%98%EC%84%9C%ED%8A%B8-%EC%82%AC%EC%A7%84-%EB%B0%B0%EA%B2%BD-%ED%99%8D%EB%B3%B4%EC%9A%A9-%ED%8F%AC%EC%8A%A4%ED%84%B0-91__g4ui8TM.jpg",
      color: "#403f2a",
    },
    {
      title: "하나로 하나다시",
      artist: "나만의 아티스트",
      location: "종로구 경복궁",
      date: "2023-08-09 ~ 08-07",
      url: "https://marketplace.canva.com/EAE6RnAvevQ/1/0/1131w/canva-%EB%84%A4%EC%9D%B4%EB%B9%84%EC%83%89-%EB%B0%A4%ED%95%98%EB%8A%98-%EB%B0%B0%EA%B2%BD-%EB%B0%B0%EC%86%A1%ED%8A%B8%EB%9F%AD-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8%EC%9D%98-%EC%B6%94%EC%84%9D%EB%B0%B0%EC%86%A1-%EC%95%88%EB%82%B4-%ED%8F%AC%EC%8A%A4%ED%84%B0-fdnd4TsvTsU.jpg",
      color: "#5b555e",
    },
    {
      title: "우르르 꽝꽝 재밌지?",
      artist: "나만의 아티스트",
      location: "종로구 경복궁",
      date: "2023-08-09 ~ 08-07",
      url: "https://marketplace.canva.com/EAFUU4UpGoE/2/0/1131w/canva-%EC%A3%BC%ED%99%A9%EC%83%89-%EB%B3%B4%EB%9D%BC%EC%83%89-%EC%BD%98%EC%84%9C%ED%8A%B8-%ED%99%8D%EB%B3%B4-ws-%ED%8F%AC%EC%8A%A4%ED%84%B0-RckEyMxwomQ.jpg",
      color: "#d46485",
    },
    {
      title: "하이야~! 크로스오버",
      artist: "나만의 아티스트",
      location: "종로구 경복궁",
      date: "2023-08-09 ~ 08-07",
      url: "https://marketplace.canva.com/EAExWu9cGyY/1/0/1131w/canva-%EA%B2%80%EC%9D%80%EC%83%89-%EB%9D%BD-%ED%8E%98%EC%8A%A4%ED%8B%B0%EB%B2%8C-%EC%BD%98%EC%84%9C%ED%8A%B8-%ED%8F%AC%EC%8A%A4%ED%84%B0-C3KCJOYFjwI.jpg",
      color: "#3c3e3f",
    },
  ];

  return <SwiperContent data={dummyShows} />;
};
