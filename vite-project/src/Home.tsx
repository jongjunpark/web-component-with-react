import { Tag } from "@imwebme/clay-experimental";
import { CheckCircleFilled } from "@imwebme/clay-icons";
import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <Link to="/notice">Notice로 가기</Link>
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
