import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

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

  const handleClick = () => {
    navigate(`/songs`);
  };

  const handleDelete = () => {
    deleteSong();
  };

  const handleEdit = () => {
    navigate(`/songs/${id}/edit`);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-1 rounded-t sm:px-6">
        <div className="bg-white 
                        shadow 
                        overflow-hidden 
                        sm:rounded-md"
        >
          <ul className="divide-y divide-gray-200 text-center items-center justify-center">
            <li>
            <div className="flex flex-wrap items-center justify-center">
              <span className="w-full block mx-auto p-6">
                {song.is_favorite ? 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#4fd1c5" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#4fd1c5" className="w-12 h-12 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg> : 
                null} 
              </span>
              <h2 className="w-full px-4 py-4 sm:px-6 text-4xl font-extrabold text-black dark:text-white sm:text-4xl">
                <span className=" text-teal-400">
                {song.name} <span className="font-normal text-gray-700">by</span> {song.artist}
                </span>
              </h2> 
            </div> 
            </li>
            <li>
              <div className="px-4 py-4 sm:px-6">
                <div className=" items-center justify-between">
                  <p className="text-md text-3xl text-gray-700 md:truncate">
                    <span className="font-bold">Album:</span> {song.album}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="px-4 py-4 sm:px-6">
                <div className="items-center justify-between">
                  <p className="text-md text-3xl text-gray-700 md:truncate">
                  <span className="font-bold">Time:</span> {song.time}
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <div className="p-4 flex gap-1 w-full md:w-1/2 mx-auto">
            <button 
              type="button"
              onClick={() => handleClick()}
              className="py-2 px-4 bg-gray-400 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md 
              ">
                Back
            </button>
            <button 
              type="button" 
              onClick={() => handleDelete()}
              className="py-2 px-4 bg-red-700 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md"
            >
              Delete
            </button>
            <button 
              type="button"
              onClick={() => handleEdit()}
              className="py-2 px-4 bg-black hover:bg-teal-700 focus:ring-teal-500 focus:ring-offset-teal-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-md"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}