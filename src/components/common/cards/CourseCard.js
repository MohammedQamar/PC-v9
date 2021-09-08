import React from "react";
import styled from "styled-components";
import Link from "next/link";

function CourseCard(props) {
  return (
    <CardHolder>
      <div className="box">
        <div className="content">
          <h3>{props.number}</h3>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
          <Link href={props.path}>
            <a>Get Started</a>
          </Link>
        </div>
      </div>
    </CardHolder>
  );
}

const CardHolder = styled.div`
  position: relative;
  min-width: 320px;
  height: 440px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin: 30px;
  transition: 0.5s;
  .box {
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    background: rgba(2, 12, 12, 1);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: 0.5s;
  }

  .content {
    padding: 20px;
    text-align: center;
    padding-top: 0;
  }
  h2 {
    text-align: center;
    margin-bottom: 15px;
    font-size: 1.8rem;
    color: #fff;
    z-index: 2000;
  }

  h3 {
    position: absolute;
    top: -120px;
    right: 10px;
    font-size: 6rem;
    color: rgba(255, 255, 255, 0.1);
    margin-bottom: 20px;
  }
  .content p {
    text-align: center;
    color: #ddd;
    line-height: 1.5;
    font-size: 1rem;
    z-index: 1000;
    transition: 0.5s;
    padding-top: 0;
  }

  .content a {
    position: relative;
    display: inline-block;
    margin-top: 20px;
    padding: 8px 20px;
    border-radius: 5px;
    text-decoration: none;
    background-color: #ff2500;

    -webkit-transition: all 800ms ease;
    transition: all 800ms ease;
    color: #fff;
    line-height: 22px;
    font-weight: 700;
    letter-spacing: 0.8px;
    border-bottom: 3px solid #c20027;
    text-transform: uppercase;
  }
  .content a:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
    background: #fff;
    color: #000;
  }
`;

export default CourseCard;
