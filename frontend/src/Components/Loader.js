import React from "react";
import { Spinner } from "react-bootstrap";
const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{ height: "200px", width: "200px", marginTop: "200px" }}
    ></Spinner>
  );
};

export default Loader;
