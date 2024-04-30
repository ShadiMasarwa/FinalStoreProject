import React from "react";
import Mlogo from "../images/Logo.mp4";

const Missing = (props) => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "75vh" }}
    >
      <video autoPlay muted loop src={Mlogo} width={200} height={300} />
      <h1>{props.children}</h1>
    </div>
  );
};

export default Missing;
