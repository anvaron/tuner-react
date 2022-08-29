import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ReactComponent as Icon } from "../Assets/sound-bars-made-of-boxes-svgrepo-com.svg";

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

  const handleClick = () => {
    navigate(`/songs`);
  };

  const handleSubmit = (event) => {
    //event.preventDefault();
    updateSong(song, id);
  };

  return (
    <>
    <section class="box-content">
      <form class="container max-w-2xl mx-auto shadow-md md:w-3/4 ">
        <div class="space-y-6 bg-white rounded-lg">
          <div class="items-center w-full p-4 pt-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 class="max-w-sm mx-auto md:w-1/3 text-2xl font-bold text-left">
                Artist name
            </h2>
            <div class="max-w-sm mx-auto md:w-2/3">
              <div class=" relative ">
              <input 
                type="text" 
                id="artist" 
                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-2xl text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                value={song.artist}
                onChange={handleTextChange}
                placeholder="Artist"
                required
              />
              </div>
            </div>
          </div>
          <hr/>
          <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 class="max-w-sm mx-auto md:w-1/3 text-2xl font-bold text-left">
                Song info
            </h2>
            <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
                <div>
                  <div class="relative ">
                    <input 
                      type="text" 
                      id="name" 
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-2xl text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                      value={song.name}
                      onChange={handleTextChange}
                      placeholder="Song name"
                      required
                    />
                  </div>
                </div>
                <div>
                  <div class="relative ">
                  <input 
                      type="text" 
                      id="album" 
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-2xl text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                      value={song.album}
                      onChange={handleTextChange}
                      placeholder="Album name"
                      required
                    />
                  </div>
                  </div>
              </div>
            </div>
            <hr/>
            <div class="items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 class="max-w-sm mx-auto md:w-4/12 text-2xl font-bold text-left">
                Song time
              </h2>
              <div class="w-full max-w-sm pl-2 mx-auto space-y-5 md:w-3/12 md:pl-9 md:inline-flex">
                  <div class=" relative ">
                  <input 
                    type="text" 
                    id="time" 
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-2xl text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                    value={song.time}
                    onChange={handleTextChange}
                    placeholder="00:00"
                    required
                  />
                  </div>
              </div>
              
              <h2 class="max-w-sm mx-auto md:w-4/12 text-2xl font-bold">
                Favorite
              </h2>
              <div class="w-full max-w-sm pl-2 mx-auto space-y-5 md:w-3/12 md:pl-9 md:inline-flex">
                  <div class=" relative ">
                  <input 
                    type="checkbox"
                    id="is_favorite"
                    onChange={handleCheckboxChange}
                    checked={song.is_favorite}
                  />
                  </div>
              </div>
            </div>
            <hr/>
            <div class="flex text-center items-center justify-center px-4 pb-4 ml-auto text-gray-500 ">
              <div class=" flex gap-1">
              <button 
              type="button"
              onClick={() => handleClick()}
              class="md:w-8/12 py-2 px-4 bg-gray-400 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-2xl text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => handleSubmit()}
                class="py-2 px-4 bg-black hover:bg-teal-700 focus:ring-teal-500 focus:ring-offset-teal-200 text-white w-full transition ease-in duration-200 text-center text-2xl text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-md"
              >
                Submit
              </button>
              </div>
            </div>
        </div>
      </form>
    </section>
    </>
  );
}