import { useLocation } from "react-router-dom";
import { useRef, useState } from "react";

import playIcon from "../assets/play.svg";
import pauseIcon from "../assets/pause.svg";
import nextIcon from "../assets/next.svg";
import prevIcon from "../assets/previous.svg";

function NowPlaying() {
  const { state } = useLocation();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!state) return <div>No song selected</div>;

  const { title, artist, cover, preview } = state;

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-[420px] text-center">
        {/* Cover */}
        <img
          src={cover}
          alt={title}
          className="w-72 h-72 object-cover rounded-xl mx-auto mb-6"
        />

        {/* Song Info */}
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-gray-500 mb-8">{artist}</p>

        <audio ref={audioRef} src={preview}></audio>

        {/* Controls */}
        <div className="flex justify-center items-center gap-8">
          {/* Previous */}
          <button>
            <img
              src={prevIcon}
              alt="Previous"
              className="w-6 opacity-70 hover:opacity-100"
            />
          </button>

          {/* Play / Pause */}
          <button
            onClick={togglePlay}
            className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center shadow-md hover:bg-blue-700"
          >
            <img
              src={isPlaying ? pauseIcon : playIcon}
              alt="Play"
              className="w-6"
            />
          </button>

          {/* Next */}
          <button>
            <img
              src={nextIcon}
              alt="Next"
              className="w-6 opacity-70 hover:opacity-100"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NowPlaying;
