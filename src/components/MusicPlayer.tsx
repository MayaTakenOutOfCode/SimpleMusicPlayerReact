import { useEffect, useRef, useState } from "react";
import ProgressBar from "./ProgressBar";
import Controls from "./Controls";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("timeupdate", updateProgress);
      audio.addEventListener("loadedmetadata", loadMetadata);

      return () => {
        audio.removeEventListener("timeupdate", updateProgress);
        audio.removeEventListener("loadedmetadata", loadMetadata);
      };
    }
  }, []);

  const updateProgress = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const loadMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (value: number) => {
    if (audioRef.current) {
      const newTime = (value / 100) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playNext = () => {
    console.log("Next track"); // Placeholder for next track logic
  };

  return (
    <div style={{ width: "80%", margin: "auto", textAlign: "center" }}>
        <h1>Name Of <br />File </h1>
      <audio ref={audioRef} src="/song1.mp3" style={{ display: "none" }}></audio>
      <ProgressBar
        audioRef={audioRef}
        currentTime={currentTime}
        duration={duration}
        onSeek={handleSeek}
      />
      <Controls
        onPlayPause={togglePlayPause}
        isPlaying={isPlaying}
        onNext={playNext}
      />
    </div>
  );
}
