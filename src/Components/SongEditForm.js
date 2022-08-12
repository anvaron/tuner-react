import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

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

  const handleSubmit = (event) => {
    //event.preventDefault();
    updateSong(song, id);
  };

  return (
    <>
    {/* <CssBaseline enableColorScheme/> */}
    <Container maxWidth="md">
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={2}>
          <Grid xs={6}>
            {/* <label htmlFor="name">Title:</label> */}
            <TextField
              fullWidth
              id="name"
              type="text"
              value={song.name}
              onChange={handleTextChange}
              label="Song's title"
              placeholder=""
              required
            />
          </Grid>
          <Grid xs={6}>
            {/* <label htmlFor="url">Artist:</label> */}
            <TextField
              id="artist"
              type="text"
              value={song.artist}
              onChange={handleTextChange}
              label="Artist's Name"
              placeholder="Artist's Name"
              required
            />
          </Grid>
        </Grid>
        {/* <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}> */}
        <Grid container spacing={2}>
          <Grid xs={6}>
          {/* <label htmlFor="category">Album:</label> */}
          <TextField
            id="album"
            type="text"
            value={song.album}
            onChange={handleTextChange}
            label="Song's Album"
            placeholder="Song's Album"
            required
          /> 
          </Grid>
          <Grid xs={6}>
            {/* <label htmlFor="category">Time:</label> */}
            <TextField
              id="time"
              type="text"
              value={song.time}
              onChange={handleTextChange}
              label="Song's Time"
              placeholder="Song's Time"
              required
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <label htmlFor="is_favorite">Favorite:</label>
            <Checkbox
              id="is_favorite"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={song.is_favorite}
            />
          </Grid>
          <Grid xs={6}></Grid>
        </Grid>
        {/* </Box> */}
        {/* <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        </Box> */}
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        
        {/* </form> */}
        </Box>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button variant="outlined" href={`/songs/${id}`}>Cancel</Button>
          <Button
            onClick={() => handleSubmit()}
          >
            Submit
          </Button>
        </ButtonGroup>
      </Box>
    </Container>
    </>
  );
}