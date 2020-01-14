import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, marginTop: "16px", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
