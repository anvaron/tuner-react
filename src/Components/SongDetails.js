import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function SongDetails() {
  const theme = createTheme({
    components: {
      // Name of the component
      MuiButton: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            fontSize: '1rem',
          },
        },
      },
    },
  });
  

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
    <ThemeProvider theme={theme}>
    <Container>
      <Box>
        <h2>
          {song.is_favorite ? <span>⭐️</span> : null} {song.name} by {song.artist}
        </h2>
        <h4>Album: {song.album}</h4>
        <h4>Time: {song.time}</h4>
        
        <ButtonGroup spacing={2} variant="contained" aria-label="outlined primary button group">
          <Button 
            variant="outlined"
            href={`/songs`}
          >
            <ArrowBackIcon /> Back
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleDelete()}
          >
            Delete <DeleteIcon />
          </Button>
          <Button v
            ariant="contained" href={`/songs/${id}/edit`}> Edit <SendIcon /></Button>
        </ButtonGroup>
      </Box>
    </Container>
    </ThemeProvider>
  );
}