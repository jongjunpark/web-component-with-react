import React from "react";
import { Button } from "@imwebme/clay-components";
import { useNavigate } from "react-router-dom";

const Notice: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Notice Page</h1>
      <Button variant="primary" text="뒤로가기" onClick={() => navigate(-1)} />
    </div>
  );
};

export default Notice;
