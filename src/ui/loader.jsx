import React from "react";

function Loader() {
  return (
    <div className="m-4">
      <div className="spinner-border d-block mx-auto" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
