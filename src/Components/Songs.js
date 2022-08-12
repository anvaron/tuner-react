import axios from "axios";
import { useState, useEffect } from "react";
import Song from "./Song";

const API = process.env.REACT_APP_API_URL;

export default function Songs() {

  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/songs/`)
      .then(({ data }) => setSongs(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="songs">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Fav</th>
              <th>Song title</th>
              <th>Artist</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}