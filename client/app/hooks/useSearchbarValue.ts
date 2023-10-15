import { useRecoilState } from "recoil";
import { searchBarstate } from "../atoms/searchBarState";
import { produce } from "immer";
import { type ISearchbarParams } from "../atoms/searchBarState";

/**
 *  a hook to use SearchbarComponent
 * @defaultmode  it will return query(검색어), filter(공연명, 아티스트명), setter functions only for query, params
 * @detail-mode  it will return query(검색어), params(filter, location, date...etc), setter function for entire params & query
 **/

export const useSearchbarValue = () => {
  const [searchBarState, setSearchBarState] = useRecoilState(searchBarstate);
  const onQueryChange = (value: string) => {
    setSearchBarState(
      produce((state) => {
        state.query = value;
      })
    );
  };

  const onParamsChange = (key: keyof ISearchbarParams, value: string) => {
    setSearchBarState(
      produce((state) => {
        state.params[key] = value;
      })
    );
  };

  return [
    searchBarState.query,
    searchBarState.params,
    onQueryChange,
    onParamsChange,
  ] as [
    string,
    ISearchbarParams,
    (value: string) => void,
    (key: keyof ISearchbarParams, value: string) => void
  ];
};
