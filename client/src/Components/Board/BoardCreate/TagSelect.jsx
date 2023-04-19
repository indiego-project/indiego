import React, { useState, useRef } from "react";
import styled from "styled-components";
import { dtFontSize, primary } from "../../../styles/mixins";
import { playDummyTags, showDummyTags } from "./dummyTags";
import Tag from "./Tag";
import SelectedTag from "./SelectedTag";

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

export default function TagSelect({ selectedTags, setSelectedTags }) {
  const [tagsData, setTagsData] = useState(playDummyTags.data);

  return (
    <Container>
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
                />
              );
            })}
          </div>
        </div>
        <div className="tag_list_viewer">
          <div className="tag_lists_container">
            {selectedTags.length ? (
              selectedTags?.map((tagData) => {
                return (
                  <SelectedTag
                    key={tagData.data.tagId}
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
