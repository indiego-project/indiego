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
  max-height: 400px;
  min-height: 100px;
  padding: 10px 0;
  margin-top: 40px;

  .contents_container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: max-content;
    padding: 0 30px;

    .contents_title {
      font-size: ${dtFontSize.large};
      font-weight: 600;
    }

    .list_box {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 300px;
      border: 1px solid lightgrey;
      overflow-y: scroll;
      align-content: center;
    }

    .null_box {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
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
          <div className="list_box">
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
              <div className="null_box">
                <p>데이터가 없습니다.</p>
              </div>
            )}
          </div>
          {!!listPageInfo?.totalPages && (
            <Pagination pageInfo={listPageInfo} setCurPage={setCurPage} />
          )}
        </div>
      </Container>
    );
  }
}
