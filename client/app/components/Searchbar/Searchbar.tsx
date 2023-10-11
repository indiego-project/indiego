"use client";

import { RecoilRoot } from "recoil";
import SearchIcon from "../../../public/icons/search.svg";
import FilterIcon from "../../../public/icons/filter.svg";
import { useSearchbarValue } from "../../hooks/useSearchbarValue";

interface ISearchbarProps {
  mode: "default" | "detail";
}

interface ISearchbarContentProps {
  mode: "default" | "detail";
}

const SearchbarContent = ({ mode }: ISearchbarContentProps) => {
  const [query, params, onQueryChange, onParamsChange] = useSearchbarValue();
  if (mode === "default") {
    return (
      <div className="flex flex-col items-center w-full h-max text-[#c4c4c4]">
        <div className="pl-4 grid grid-cols-8 items-center justify-center w-[80%] h-9 rounded-full bg-white border-2 shadow-md border-primary">
          <input
            placeholder="검색어를 입력해주세요."
            className="col-start-1 col-end-8 text-center text-sm font-light focus:text-start focus:outline-none focus:text-black focus:font-normal focus:placeholder:text-transparent"
            value={query}
            onChange={(e) => {
              onQueryChange(e.currentTarget.value);
            }}
          />
          <div className="flex justify-center">
            <SearchIcon width="20" height="20" />
          </div>
        </div>
        <div className="grid grid-cols-6 w-[80%] h-max justify-center items-center text-xs mt-2 px-10">
          <div className="flex col-start-2 col-end-3 items-center justify-center w-max h-max">
            <input
              className="mr-1 w-3 h-3 border-[3px] border-[#d9d9d9] rounded-full bg-[#d9d9d9] appearance-none outline-none checked:bg-primary transition-colors hover:cursor-pointer"
              type="radio"
              value="공연명"
              checked={params.filter === "공연명"}
              onChange={(e) => {
                onParamsChange("filter", e.currentTarget.value);
              }}
            />
            <label>공연명</label>
          </div>
          <div className="flex col-start-4 col-end-6 items-center justify-center w-max h-max">
            <input
              className="mr-1 w-3 h-3 border-[3px] border-[#d9d9d9] rounded-full bg-[#d9d9d9] outline-none appearance-none checked:bg-primary transition-colors hover:cursor-pointer"
              type="radio"
              value="아티스트명"
              checked={params.filter === "아티스트명"}
              onChange={(e) => {
                onParamsChange("filter", e.currentTarget.value);
              }}
            />
            <label>아티스트명</label>
          </div>
        </div>
      </div>
    );
  }

  if (mode === "detail") {
    return (
      <div className="flex flex-col items-center w-full h-max text-[#c4c4c4]">
        <div className="pl-4 grid grid-cols-8 items-center justify-center w-[90%] h-14 rounded-full bg-white border-2 shadow-md border-primary">
          <SearchIcon width="20" height="20" />
          <div className="col-start-2 col-end-8 flex flex-col h-full justify-center">
            <input
              placeholder="검색어를 입력해주세요."
              className="w-full text-sm font-light h-max focus:text-start focus:outline-none focus:text-black focus:font-normal focus:placeholder:text-transparent"
              value={query}
              onChange={(e) => {
                onQueryChange(e.currentTarget.value);
              }}
            />
            <p className="text-[5px] h-max">날짜, 위치, 태그</p>
          </div>
          <FilterIcon width="24" height="24" />
        </div>
      </div>
    );
  }
};

const Searchbar = ({ mode }: ISearchbarProps) => {
  return (
    <div className="flex w-full h-max">
      <RecoilRoot>
        <SearchbarContent mode={mode} />
      </RecoilRoot>
    </div>
  );
};

export default Searchbar;
