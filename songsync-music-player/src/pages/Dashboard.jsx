import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchSongs } from "../services/deezerApi";

function Dashboard() {
  const [songs, setSongs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSongs = async () => {
      const results = await searchSongs("burna");
      setSongs(results);
    };

    fetchSongs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-2xl font-bold mb-6">Popular Tracks</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {songs.map((song) => (
          <div
            key={song.id}
            onClick={() =>
              navigate("/now-playing", {
                state: {
                  title: song.title,
                  artist: song.artist.name,
                  cover: song.album.cover_medium,
                  preview: song.preview,
                },
              })
            }
            className="bg-white rounded-xl shadow p-4 cursor-pointer hover:shadow-lg transition"
          >
            <img
              src={song.album.cover_medium}
              alt={song.title}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="font-semibold">{song.title}</h3>
            <p className="text-gray-500 text-sm">{song.artist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
