import React from "react";
import styled from "styled-components";

function CourseTitle(props) {
  return <Title>{props.title}</Title>;
}

const Title = styled.h1`
  text-align: center;
  font-size: clamp(1.8rem, 2.5vw, 3.4rem);
  margin-bottom: 0;
`;

export default CourseTitle;
