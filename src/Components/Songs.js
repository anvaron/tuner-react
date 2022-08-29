import axios from "axios";
import { useState, useEffect } from "react";
import Song from "./Song";

const API = process.env.REACT_APP_API_URL;

export default function Songs() {

  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then(({ data }) => setSongs(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
    <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
      <div className="py-4">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th scope="col" 
                      className=" px-5 
                                  py-3 
                                  bg-white 
                                  border-b 
                                  border-gray-200 
                                  text-gray-800  
                                  text-center 
                                  text-lg 
                                  uppercase 
                                  text-2xl 
                                  font-bold"
                  >
                    Fav
                  </th>
                  <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-lg uppercase text-2xl font-bold">
                    Song
                  </th>
                  <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-lg uppercase text-2xl font-bold">
                    Artist
                  </th>
                  <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-center text-lg uppercase text-2xl font-bold">
                    Time
                  </th>
                  <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-center text-lg uppercase text-2xl font-bold">
                    View
                  </th>
                </tr>
              </thead>
              <tbody>
              {songs.map((song) => {
                return <Song key={song.id} song={song} />;
              })}  
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}