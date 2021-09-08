import React from "react";
import styled from "styled-components";
import Link from "next/link";

function Header() {
  return (
    <Container>
      <div className="content">
        <h1>Build Coding Skills Online.</h1>
        <p>
          Learn to build awesome websites in HTML, CSS and JavaScript for free.
        </p>
        <Link href="#courses">
          <button>Get Started</button>
        </Link>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background: url(/header.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  .content {
    max-width: max(80%, 650px);
    margin: 0 auto;
    text-align: center;
  }

  .container h1 {
    margin-bottom: 0;
  }

  @media screen and (max-width: 479px) {
    .content h1 {
      margin-bottom: 16px;
      line-height: 40px;
      text-align: center;
    }
  }
  @media screen and (max-width: 600px) {
    .content p {
      padding-right: 30px;
      padding-left: 30px;
    }
  }
`;

export default Header;
