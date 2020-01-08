import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiList } from "Components/molecules/Icon/fi";
import { PostBox, Jumbo } from "Components/organisms";

const Container = styled.div`
  display: flex;
  overflow: auto;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {
    height: auto;
  }
`;
const Title = styled.h3`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 500;
`;

const Article = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 500px;
  flex-grow: 1;
  ${Title} {
    padding: 20px 0;
  }
`;
const TB = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  :last-child {
    position: relative; /* flexbox 스크롤버그 */
  }
  /* :last-child::after {
    display: block;
    width: 11px;
    height: 1px;
    position: absolute;
    top: 0;
    left: 100%;
    visibility: hidden;
    content: "";
  } */
`;

export default () => (
  <Container>
    <TB>
      <Jumbo medium verticalFrom={"tablet"}>
        Traveler
      </Jumbo>
      <Article>
        <Title>베스트 여행기</Title>
        {new Array(3).fill("").map((_, index) => (
          <PostBox key={index} />
        ))}
      </Article>
    </TB>
    <TB>
      <Article>
        <Title>최신 여행기</Title>
        {new Array(3).fill("").map((_, index) => (
          <PostBox key={index} />
        ))}
      </Article>
      <Jumbo large verticalFrom={"tablet"}>
        고민은
      </Jumbo>
    </TB>
    <TB>
      <Jumbo verticalFrom={"tablet"}>당신의 열정에 맡기고</Jumbo>
      <Article>
        <Title>
          해외 여행기
          <Link to="/board/1">
            <FiList />
          </Link>
        </Title>

        {new Array(2).fill("").map((_, index) => (
          <PostBox key={index} />
        ))}
      </Article>
    </TB>
    <TB>
      <Article>
        <Title>
          국내 여행기
          <Link to="/board/2">
            <FiList />
          </Link>
        </Title>

        {new Array(7).fill("").map((_, index) => (
          <PostBox key={index} />
        ))}
      </Article>
      <Jumbo>
        지금
        <br /> 떠나세요
      </Jumbo>
    </TB>
  </Container>
);
