import React from "react";
import "../styles/loader.css";
function Loader() {
  return (
    <div className="loader-container">
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className="caption">Loading...</p>
    </div>
  );
}

export default Loader;
