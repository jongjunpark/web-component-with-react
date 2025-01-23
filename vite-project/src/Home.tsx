"use client";

import { Tag } from "@imwebme/clay-experimental";
import { CheckCircleFilled } from "@imwebme/clay-icons";
import React from "react";

const Home: React.FC = () => {
  const [value] = React.useState("hello");
  return (
    <div>
      <meta
        name="keywords"
        content="React, JavaScript, semantic markup, html"
      />
      <meta name="title" content="hello" />
      <meta name="description" content="hello" />
      <meta name="og:title" content="hello" />
      <meta name="og:description" content="hello" />
      <h1>Home Page {value}</h1>
      <div>
        <Tag
          variant="success"
          trailingIcon={<CheckCircleFilled colorToken="icon-critical" />}
        >
          Tag
        </Tag>
      </div>
      <slot name="my-slot"></slot>
    </div>
  );
};

export default Home;
