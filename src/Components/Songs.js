import axios from "axios";
import { useState, useEffect } from "react";
import Song from "./Song";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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
    <>
    <CssBaseline enableColorScheme/>
    <Container maxWidth="xl">
    <div className="songs">
      <TableContainer component={Paper}>
        <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
              <TableCell></TableCell>
              <TableCell>Fav</TableCell>
              <TableCell>Song title</TableCell>
              <TableCell>Artist</TableCell>
              <TableCell>Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </Container>
    </>
  );
}