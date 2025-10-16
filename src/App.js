import image from "./images/WhatsApp Image 2025-04-15 at 10.41.02_5d1d3dec.jpg";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const name = "MIDHUN MOHAN M";
  const description = "An extra pottential Human Being .";

  const cardStyle = {
    width: "320px",
    border: "2px solid #333",
    borderRadius: "12px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div style={cardStyle} className="text-center">
        {/* ✅ Internal image from public folder */}
        <img
          src={image}
          alt="Profile"
          className="img-fluid rounded-circle mb-3"
          width="120"
        />

        <h3 className="fw-bold">{name}</h3>
        <p>{description}</p>

        {/* ✅ External image (via internet link) */}
        <img
          src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c4a973548e0205b87fbca992"
          alt="External Profile"
          className="img-fluid rounded-circle mt-3"
          width="80"
        />
      </div>
    </div>
  );
}

export default App;
