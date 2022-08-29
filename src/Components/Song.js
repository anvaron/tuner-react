import { Link } from "react-router-dom";


export default function Song({ song }) {
  return (
    <tr className="hover:bg-teal-100 ">
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-2xl font-normal">
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
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-2xl font-normal">
        <Link to={`/songs/${song.id}`}>{song.name}</Link>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-2xl font-normal">
        {song.artist}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-2xl font-normal">
        {song.time}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white tems-center justify-center">
        <Link to={`/songs/${song.id}`}>
          <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm.002 3c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z" fill-rule="nonzero"/></svg>
        </Link>
      </td>
    </tr>
  );
}