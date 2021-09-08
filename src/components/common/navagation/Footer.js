import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Foot>
      <p>Profound Coder &copy; 2021</p>
    </Foot>
  );
}

const Foot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Footer;
