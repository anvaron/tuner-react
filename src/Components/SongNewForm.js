import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function SongNewForm() {
  let navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const newSong = (song) => {
    axios
      .post(`${API}/songs`, song)
      .then(() => {
        navigate(`/songs`);
      })
      .catch((error) => console.warn("catch", error));
  };

  // HANDLERS
  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    newSong(song);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
      <label htmlFor="name">Title:</label>
        <input
          id="name"
          type="text"
          value={song.name}
          onChange={handleTextChange}
          placeholder="Song's title"
          required
        />
        <label htmlFor="url">Artist:</label>
        <input
          id="artist"
          type="text"
          value={song.artist}
          onChange={handleTextChange}
          placeholder="Artist's Name"
          required
        />
        <label htmlFor="category">Album:</label>
        <input
          id="album"
          type="text"
          value={song.album}
          placeholder="Song's Album"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="category">Time:</label>
        <input
          id="time"
          type="text"
          value={song.time}
          placeholder="Song's Time"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />
        <Link to={`/songs`}><button>Cancel</button></Link>
        <input type="submit" />
      </form>
    </div>
  );
}