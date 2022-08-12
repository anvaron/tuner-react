import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

//import Reviews from "./Reviews";

export default function SongDetails() {

  const [song, setSong] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((res) => {
        setSong(res.data);
      })
      .catch((error) => console.log(error));
  }, [id, navigate, API]);

  const deleteSong = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then(() => {
        navigate(`/songs`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleDelete = () => {
    deleteSong();
  };

  return (
    <>
      <article>
        <h2>
          {song.is_favorite ? <span>⭐️</span> : null} {song.name} by {song.artist}
        </h2>
        <h4>Album: {song.album}</h4>
        <h4>Time: {song.time}</h4>
        <div className="showNavigation">
          <div>
            <Link to={`/songs`}><button>Back</button></Link>
          </div>
          <div>
            <Link to={`/songs/${id}/edit`}><button>Edit</button></Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </article>
    </>
  );
}