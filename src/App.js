import React, { useState } from "react";

function LightSwitch({ isOn, toggleLight }) {
  return (
    <button
      onClick={toggleLight}
      style={{
        padding: "10px 20px",
        backgroundColor: isOn ? "#ff6666" : "#4caf50",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px"
      }}
    >
      {isOn ? "Turn OFF" : "Turn ON"}
    </button>
  );
}

function Room() {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        padding: "40px",
        borderRadius: "10px",
        backgroundColor: isOn ? "#fff9c4" : "#2c3e50",
        color: isOn ? "#000" : "#fff",
        width: "300px",
        margin: "100px auto",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
      }}
    >
      <h2>{isOn ? "The room is bright" : "The room is dark"}</h2>
      <LightSwitch isOn={isOn} toggleLight={toggleLight} />
    </div>
  );
}

export default Room;
