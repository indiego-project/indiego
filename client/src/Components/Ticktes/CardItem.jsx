import React from "react";

import breakpoint from "../../styles/breakpoint";
import { primary, dtFontSize, sub, mbFontSize } from "../../styles/mixins";

import styled from "styled-components";
import { Link } from "react-router-dom";
import Tag from "./Create/Tag";

const CardItemContainer = styled.div`
  width: 100%;
  max-width: 250px;
  min-width: 200px;
  background-color: ${sub.sub200};
  border-radius: 20px;
  position: relative;
  padding: 15px 10px;
  transition: all 0.1s ease-in-out;
  min-height: 350px;

  a {
    text-decoration: none !important;
    color: inherit;

    @media screen and (max-width: ${breakpoint.mobile}) {
      display: flex;
      flex-direction: row;
      padding: 30px 10px;
      position: relative;
      height: 100%;
      justify-content: space-between;
    }
  }

  &:hover {
    background-color: ${primary.primary300};
    color: white;
    cursor: pointer;
    box-shadow: 0 5px 5px ${sub.sub400};
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    max-width: 100%;
    background-color: transparent;
    border-radius: 0px;
    border-bottom: 1px solid ${sub.sub200};
    height: 300px;
    :hover {
      border: none;
    }
  }

  .tag_container_desktop {
    display: flex;
    margin-bottom: 10px;
    flex-wrap: wrap;
    gap: 2px 0;
    justify-content: center;

    @media screen and (max-width: ${breakpoint.mobile}) {
      display: none;
    }
  }
  .tag_container_mobile {
    display: flex;
    margin: 10px 0;
    padding: 10px 0;
    width: max-content;

    @media screen and (min-width: ${breakpoint.mobile}) {
      display: none;
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 50%;
  margin-bottom: 10px;

  @media screen and (max-width: ${breakpoint.mobile}) {
    width: 50%;
    height: 100%;
  }

  img {
    box-shadow: 0 5px 5px ${sub.sub400};
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 120px;
  justify-content: center;

  h2 {
    font-size: calc(10px + 0.3vw);
    margin-bottom: 5px;
  }

  h3 {
    font-size: calc(8px + 0.3vw);
    font-weight: 500;
    margin-bottom: 5px;
  }

  h4 {
    font-size: calc(3px + 0.3vw);
    font-weight: 400;
    margin-bottom: 5px;

    @media screen and (min-width: ${breakpoint.mobile}) {
      height: 100%;
      font-size: ${dtFontSize.xsmall};
      align-items: center;
    }
  }

  .price {
    font-size: calc(5px + 1vw);
    font-weight: 500;

    @media screen and (min-width: ${breakpoint.mobile}) {
      font-size: ${dtFontSize.xsmall};
    }
  }
`;

const TagStyleExtended = styled(Tag)`
  font-size: ${mbFontSize.xsmall};
  padding: 5px;
  min-width: 0px;
  height: 15px;
`;

export default function CardItem({ data }) {
  return (
    <CardItemContainer>
      <Link to={`/tickets/${data.id}`}>
        <ImageContainer>
          <div className="tag_container_mobile">
            {data?.tags?.map((data, index) => {
              if (index > 2) {
                return null;
              } else {
                return <TagStyleExtended data={data} key={data.tagId} />;
              }
            })}
            {data?.tags?.length > 3 && <span>...</span>}
          </div>
          <img width="100px" height="120px" src={data.image} alt="poster" />
        </ImageContainer>
        <div className="tag_container_desktop">
          {data?.tags?.map((data, index) => {
            if (index > 2) {
              return null;
            } else {
              return <TagStyleExtended data={data} key={data.tagId} />;
            }
          })}
          {data?.tags?.length > 3 && <span>...</span>}
        </div>
        <DetailContainer>
          <h4>{data.category}</h4>
          <h2>{data.title}</h2>
          <h3>{data.nickname}</h3>
          <h4 className="price">{`${data.price ? data.price + "₩" : ""}`}</h4>
          <h4>
            {data.showAt && data.expiredAt
              ? `${data.showAt} - ${data.expiredAt}`
              : ""}
          </h4>
          <h4>{data.address}</h4>
        </DetailContainer>
      </Link>
    </CardItemContainer>
  );
}
