import { atom } from "recoil";

// atom for search options (used in searchbar)
// later, it will generate url query parameters based on its state

export interface ISearchbarParams {
  filter: string; // 공연명, 아티스트명
  date: string; // e.g. 2023-09-19
  location: string; // e.g. 용산구
}

interface ISearchbarState {
  query: string; // 검색어
  params: ISearchbarParams;
}

export const searchBarstate = atom<ISearchbarState>({
  key: "searchBarState",
  default: {
    query: "",
    params: {
      filter: "공연명",
      date: "",
      location: "",
    },
  },
});
