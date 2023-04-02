import { create } from "zustand";
import { produce } from "immer";

export const useTicketSearchStore = create((set, get) => ({
  searchParams: {
    search: "",
    filter: "공연명",
    start: "",
    end: "",
    location: "",
    category: "",
  },

  setSearch: (searchInput) => {
    set(
      produce((state) => {
        state.searchParams.search = searchInput;
      })
    );
  },
  setFilter: (filterInput) => {
    set(
      produce((state) => {
        state.searchParams.filter = filterInput;
      })
    );
  },
  getSearchUrl: () => {
    const params = get().searchParams;
    let searchUrl = "/tickets?";
    for (let paramKey in params) {
      if (params[paramKey]) {
        searchUrl += paramKey + "=";
        searchUrl += params[paramKey] + "&";
      }
    }
    searchUrl = searchUrl.slice(0, searchUrl.length - 1);
    console.log(searchUrl);
    return searchUrl;
  },
}));
