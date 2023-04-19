import React, { useState } from "react";
import List from "./List";
import Pagination from "./Pagination";
import styled from "styled-components";
import { dtFontSize } from "../../styles/mixins";

import { useQuery } from "@tanstack/react-query";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 70%;
  height: max-content;
  min-height: 100px;
  border: 1px solid lightgrey;
  padding: 10px 0;

  .contents_container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: max-content;
    padding: 0 30px;
    /* background-color: blue; */

    .contents_title {
      font-size: ${dtFontSize.large};
      font-weight: 600;
    }
  }
`;

export default function ListViewer({ listInfo }) {
  const [listData, setListData] = useState([]);
  const [listPageInfo, setlistPageInfo] = useState();
  const [curPage, setCurPage] = useState(1);

  const { queryKey, queryFn, title, sort, handlers } = listInfo;

  const { isLoading } = useQuery({
    queryKey: [queryKey, curPage],
    queryFn: queryFn({ page: 1, size: 12 }),
    onSuccess: (res) => {
      const { data, pageInfo } = res.data;
      setListData(data);
      setlistPageInfo(pageInfo);
    },
    keepPreviousData: true,
  });

  if (!isLoading) {
    return (
      <Container>
        <div className="contents_container">
          <p className="contents_title">{title}</p>
          {listData.length ? (
            listData.map((data, index) => (
              <List
                key={data.id}
                data={data}
                index={index}
                sort={sort}
                handlers={handlers}
                queryKey={queryKey}
              />
            ))
          ) : (
            <p>데이터가 없습니다.</p>
          )}
          {!!listPageInfo?.totalPages && (
            <Pagination pageInfo={listPageInfo} setCurPage={setCurPage} />
          )}
        </div>
      </Container>
    );
  }
}
