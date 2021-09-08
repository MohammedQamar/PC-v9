import React from "react";
import Link from "next/link";
import styled from "styled-components";

function NavBar() {
  return (
    <Nav>
      <div className="image">
        <Link href="/">
          <img src="/logo.svg" />
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/#courses">courses</Link>
        </li>
        <li>
          <Link href="/projects">projects</Link>
        </li>
        <li>
          <Link href="/blog">blog</Link>
        </li>
      </ul>
    </Nav>
  );
}

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 70px 1fr;
  /* background-color: var(--primary-bcg); */
  background: rgba(2, 12, 12, 1);
  color: var(--secondary-font);
  text-transform: uppercase;
  .image {
    align-self: flex-end;
    padding-left: 30px;
    cursor: pointer;
  }

  ul {
    display: flex;
    padding-right: 30px;
    list-style: none;
    align-items: center;
    justify-content: flex-end;
  }
  li {
    align-self: center;
    margin-right: 20px;
  }
  li:hover {
    color: var(--button-bcg);
    cursor: pointer;
  }

  .active {
    border-bottom: solid 2px var(--button-bcg);
  }
`;

export default NavBar;
