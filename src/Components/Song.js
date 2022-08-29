import { Link } from "react-router-dom";


export default function Song({ song }) {
  return (
    <tr className="hover:bg-teal-100 ">
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-3xl font-normal">
      {song.is_favorite ? (
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#4fd1c5" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#4fd1c5" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-3xl font-normal">
        <Link to={`/songs/${song.id}`}>{song.name}</Link>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-3xl font-normal">
        {song.artist}
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-3xl font-normal">
        {song.time}
      </td>
    </tr>
    
  );
}