// src/App.jsx
import React, {useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MovieList from './components/Movielist/MovieList.jsx';
import TrendingMovies from './components/Movielist/TrendingMovies.jsx';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import { theme } from './theme.jsx';
import NewRelease from './components/Movielist/NewRelease.jsx';
 import UpcomingMovies from './components/Movielist/UpcomingMovies.jsx';


const App = () => {

  const [mode, setMode] = useState('dark')

  const darkTheme = createTheme({
    palette: {
      mode: mode,
      background: {
        default: mode === 'dark' ? theme.palette.success.main : theme.palette.primary.main,
      },
      text: {
        primary: mode === 'dark'
          ? theme.palette.success.contrastText
          : theme.palette.primary.contrastText,
      }
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
         
        <Navbar sx={{ bgcolor: 'background.default', color: 'text.primary' }} setMode={setMode} mode={mode} />
  
      <MovieList />
      <TrendingMovies />
      <NewRelease/>
      <UpcomingMovies />
 
    </ThemeProvider>

  );
};

export default App;
