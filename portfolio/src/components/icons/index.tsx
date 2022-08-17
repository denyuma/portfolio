import React, { FC } from "react";
import { skills } from "../../data/skills";
import GoIcon from "./GoIcon";
import GraphQLIcon from "./GraphQLIcon";
import JavascriptIcon from "./JavascriptIcon";
import NodejsIcon from "./NodejsIcon";
import ReactIcon from "./ReactIcon";
import TypescriptIcon from "./TypescriptIcon";
import ApolloIcon from "./ApolloIcon";
import Python from "./Python";

type Props = {
  name: typeof skills[number]["name"];
};

export const SkillIcon: FC<Props> = (props) => {
  const { name } = props;

  switch (name) {
    case "React":
      return <ReactIcon />;
    case "GraphQL":
      return <GraphQLIcon />;
    case "Apollo":
      return <ApolloIcon />;
    case "TypeScript":
      return <TypescriptIcon />;
    case "JavaScript":
      return <JavascriptIcon />;
    case "Node.js":
      return <NodejsIcon />;
    case "Go":
      return <GoIcon />;
    case "Python":
      return <Python />;
    default:
      return null;
  }
};
