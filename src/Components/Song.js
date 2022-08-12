import { Link } from "react-router-dom";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export default function Song({ song }) {
  return (
    <TableRow>
      <TableCell >
        <Link to={`/songs/${song.id}/edit`}>Edit</Link>
      </TableCell>
      <TableCell>
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </TableCell>
      <TableCell>
        <Link to={`/songs/${song.id}`}>{song.name}</Link>
      </TableCell>
      <TableCell>{song.artist}</TableCell>
      <TableCell>
        {song.time}
      </TableCell>
    </TableRow>
  );
}