import React from "react";

interface ControlsProps {
  onPlayPause: () => void;
  isPlaying: boolean;
  onNext: () => void;
}

const Controls: React.FC<ControlsProps> = ({ onPlayPause, isPlaying, onNext }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
      <button onClick={onPlayPause} style={buttonStyle}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <button onClick={onNext} style={buttonStyle}>
        Next
      </button>
    </div>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Controls;
