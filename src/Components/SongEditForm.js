import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function SongEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const updateSong = (updatedSong) => {
    axios
      .put(`${API}/songs/${id}`, updatedSong)
      .then(() => {
          navigate(`/songs/${id}`);
      })
      .catch((error) => console.warn("catch", error));
  };

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then(
        (res) => setSong(res.data),
        (error) => navigate(`/not-found`)
      );
  }, [id, navigate]);

  // HANDLERS
  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong(song, id);
  };

  return (
    <div className="form__wrapper">
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
        <Link to={`/songs/${id}`}><button>Cancel</button></Link>
        <input type="submit" />
      </form>
    </div>
  );
}