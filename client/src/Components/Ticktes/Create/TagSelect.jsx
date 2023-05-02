import React, { useState } from "react";
import styled from "styled-components";
import { dtFontSize, primary } from "../../../styles/mixins";
import Tag from "./Tag";
import SelectedTag from "./SelectedTag";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .title {
    font-size: ${dtFontSize.medium};
    font-weight: 700;
    color: ${primary.primary500};
  }

  .description {
    margin-top: 10px;
  }

  .inner_container {
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
  }

  .tag_list_viewer {
    display: flex;
    width: 100%;
    height: max-content;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  .tag_lists_container {
    display: flex;
    align-items: center;
    width: max-content;
    height: 50px;
    margin-top: 10px;
  }
`;

export default function TagSelect({
  selectedTags,
  setSelectedTags,
  category,
  className,
}) {
  const [tagsData, setTagsData] = useState([]);

  const fetchTagsData = () => {
    return axios.get(`${process.env.REACT_APP_SERVER_URI}/tags`, {
      params: { type: category },
    });
  };

  const tagClickHandler = (data) => {
    const tagData = data;
    return () => {
      if (selectedTags.length > 6) {
        window.alert("태그 갯수는 7개 이상을 초과할 수 없습니다.");
      } else {
        const deduplicatedTags = selectedTags.filter(
          // eslint-disable-next-line eqeqeq
          (selTag) => selTag.tagId != tagData.tagId
        );
        setSelectedTags([...deduplicatedTags, data]);
      }
    };
  };

  useQuery({
    queryFn: fetchTagsData,
    queryKey: ["fetchTagsData", category],
    onSuccess: (res) => {
      const { data } = res.data;
      setTagsData(data);
    },
  });

  return (
    <Container className={className}>
      <p className="title">공연 태그 선택</p>
      <p className="description">공연을 나타내는 태그를 선택해주세요.</p>
      <div className="inner_container">
        <div className="tag_list_viewer">
          <div className="tag_lists_container">
            {tagsData?.map((tagData) => {
              return (
                <Tag
                  key={tagData.tagId}
                  data={tagData}
                  setSelectedTags={setSelectedTags}
                  selectedTags={selectedTags}
                  clickHandler={tagClickHandler}
                />
              );
            })}
          </div>
        </div>
        <div className="tag_list_viewer">
          <div className="tag_lists_container">
            {selectedTags?.length ? (
              selectedTags?.map((tagData) => {
                return (
                  <SelectedTag
                    key={tagData.tagId}
                    data={tagData}
                    setSelectedTags={setSelectedTags}
                    selectedTags={selectedTags}
                  />
                );
              })
            ) : (
              <p>태그가 선택되지 않았습니다.</p>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
