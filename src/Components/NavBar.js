// import { Link } from "react-router-dom";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
// import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
// import { makeStyles } from '@mui/material/core/styles';
import AppBar from "@mui/material/AppBar";
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
  palette: {
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    light: {
      main: '#FFF',
      contrastText: '#fff',
    },
  },
});

// const useStyles = makeStyles(theme => ({
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

export default function NavBar() {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/songs/new`);
  }

  // const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    
    // <nav>
    //   <h1>
    //     <Link to="/songs">Songs</Link>
    //   </h1>
    //   <button>
    //     <Link to="/songs/new">New Song</Link>
    //   </button>
    // </nav>
    // <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
    //   <Menu>
    //     <MenuItem>
    //     <Link href="/songs">Songs</Link>
    //     </MenuItem>
    //     <MenuItem>
    //       <Button
    //       id="fade-button"
    //       // aria-controls={open ? 'fade-menu' : undefined}
    //       aria-haspopup="true"
    //       // aria-expanded={open ? 'true' : undefined}
    //       onClick={handleClick}
    //       >
    //         New Song
    //       </Button>
    //     </MenuItem>
    //   </Menu>
    // </Box>
    <ThemeProvider theme={theme}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="primary"
          aria-label="menu"
          // className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" >
          Tuner
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Button 
          variant="outlined"
          color="light" 
          href={`/songs`}
        >
          Songs
        </Button>
        <Button 
          // color="secondary"
          color="neutral" variant="contained" 
          onClick={handleClick}
        >
          New Song
        </Button>
        </Stack>
      </Toolbar>
      {/* <ModalDialog open={open} handleClose={handleClose} /> */}
    </AppBar>
    </ThemeProvider>
  );
}