import { useLocation } from "react-router-dom";
import { useRef } from "react";

function NowPlaying() {
  const { state } = useLocation();
  const audioRef = useRef(null);

  if (!state) return <div>No song selected</div>;

  const { title, artist, cover, preview } = state;

  const playSong = () => {
    audioRef.current.play();
  };

  const pauseSong = () => {
    audioRef.current.pause();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-80 text-center">
        <img
          src={cover}
          alt={title}
          className="w-56 h-56 object-cover rounded-xl mx-auto mb-6"
        />

        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-500 mb-6">{artist}</p>

        <audio ref={audioRef} src={preview}></audio>

        <div className="flex justify-center gap-6 items-center">
          <button onClick={pauseSong} className="text-xl text-gray-600">
            ⏸
          </button>

          <button
            onClick={playSong}
            className="bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center text-xl"
          >
            ▶
          </button>

          <button onClick={pauseSong} className="text-xl text-gray-600">
            ⏹
          </button>
        </div>
      </div>
    </div>
  );
}

export default NowPlaying;
