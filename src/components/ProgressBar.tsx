

interface ProgressBarProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  currentTime: number;
  duration: number;
  onSeek: (value: number) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ audioRef, currentTime, duration, onSeek }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <input
        type="range"
        min={0}
        max={100}
        value={(currentTime / duration) * 100 || 0}
        onChange={(e) => onSeek(Number(e.target.value))}
        style={{
          width: "50%",
          height: "5px",
          appearance: "none",
          backgroundColor: "#ddd",
          borderRadius: "5px",
          outline: "none",
        }}
      />
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
};

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

export default ProgressBar;
