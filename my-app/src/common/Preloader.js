import React from "react";
import Preloading from "./Preloading.svg";
let Preloader = (props) => {
  return (
    <div className="">
      <img src={Preloading}></img>
    </div>
  );
};

export default Preloader;
