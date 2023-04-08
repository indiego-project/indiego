import { create } from "zustand";
import { produce } from "immer";

function dateFormatter(dateObj) {
  let year = dateObj.getFullYear();
  let month = dateObj.getMonth() + 1;
  let date = dateObj.getDate();

  if (Number(month) < 10) {
    month = "0" + month.toString();
  }

  if (Number(date) < 10) {
    date = "0" + date.toString();
  }

  return year + "-" + month + "-" + date;
}

export const useTicketSearchStore = create((set, get) => ({
  searchParams: {
    search: "",
    filter: "공연명",
    start: "",
    end: "",
    location: "",
    category: "전체",
  },

  setSearch: (searchInput) => {
    set(
      produce((state) => {
        state.searchParams.search = searchInput;
        console.log("set search running");
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
  setDate: (dateInput) => {
    set(
      produce((state) => {
        const { startDate, endDate } = dateInput;
        state.searchParams.start = dateFormatter(startDate);
        state.searchParams.end = dateFormatter(endDate);
      })
    );
  },
  getDateRange: () => {
    const { start, end } = get().searchParams;
    const startDate = start ? new Date(start) : new Date();
    const endDate = end ? new Date(end) : new Date();

    return [
      {
        startDate,
        endDate,
        key: "selection",
      },
    ];
  },
  setLocation: (locationInput) => {
    set(
      produce((state) => {
        state.searchParams.location = locationInput;
      })
    );
  },
  setCategory: (categoryInput) => {
    set(
      produce((state) => {
        state.searchParams.category = categoryInput;
      })
    );
  },
  setAllParams: (params) => {
    set(
      produce((state) => {
        if (!params.search) {
          params.search = "";
        }
        if (!params.filter) {
          params.filter = "공연명";
        }
        if (!params.category) {
          params.category = "전체";
        }

        Object.assign(state.searchParams, params);
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
    return searchUrl;
  },
  resetSearchParams: () => {
    set(
      produce((state) => {
        state.searchParams.start = "";
        state.searchParams.end = "";
        state.searchParams.location = "";
        state.searchParams.category = "";
      })
    );
  },
  resetAllParams: () => {
    set((state) => {
      state.searchParams = {
        search: "",
        filter: "공연명",
        start: "",
        end: "",
        location: "",
        category: "",
      };
    });
  },
}));
