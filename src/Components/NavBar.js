// import { Link } from "react-router-dom";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
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

export default function NavBar() {
  return (
    // <nav>
    //   <h1>
    //     <Link to="/songs">Songs</Link>
    //   </h1>
    //   <button>
    //     <Link to="/songs/new">New Song</Link>
    //   </button>
    // </nav>
    <Toolbar
    sx={{
      pr: '24px', // keep right padding when drawer closed
    }}
    >
    
    <h1>
    <Link to="/songs">Songs</Link>
    </h1>
    <button>
    <Link to="/songs/new">New Song</Link>
    </button>
  </Toolbar>
  );
}