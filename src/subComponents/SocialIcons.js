import React from "react";
import { Facebook, Github, Twitter, YouTube } from "../components/AllSvgs";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <div>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com">
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </div>
      <div>
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com"
        >
          <Twitter
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </div>
      <div>
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://Facebook.com"
        >
          <Facebook
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </div>
      <div>
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://YouTube.com"
        >
          <YouTube
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </div>
      <Line color={props.theme} />
    </Icons>
  );
};

export default SocialIcons;
