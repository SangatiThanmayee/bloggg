import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div>
      <div className="container loader">
        <figure class="loader">
          <div class="dot white"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </figure>
      </div>
    </div>
  );
};

export default Loading;
