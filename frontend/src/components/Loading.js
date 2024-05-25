import React from "react";
import { ClipLoader, ClockLoader, RingLoader, DotLoader } from "react-spinners";

function Loading() {
  return (
    <div
      className="loading-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#ffffff",
      }}
    >
      <DotLoader color="#f18f06" loading size={100} />
    </div>
  );
}

export default Loading;
