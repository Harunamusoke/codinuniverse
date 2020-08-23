import React from "react";
import loader from "../media/loader.gif";

const Loader = () => {
  return (
    <div className="mx-auto d-flex align-items-center">
      <img
        src={loader}
        alt="loader"
        className="mx-auto img-fluid"
        width="200px"
        height="200px"
      />
    </div>
  );
};

export default Loader;
