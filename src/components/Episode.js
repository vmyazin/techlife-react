import React from "react";

const Episode = ({match}) => {
  return (
    <div className="App">
      <p>№{match.params.id}</p>
    </div>
  );
}

export default Episode;
