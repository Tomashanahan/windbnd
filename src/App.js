import React from 'react';
import './App.css';
import { Box } from '@chakra-ui/react';
// import data from './stays.json'
import NavBar from './Components/Nav_bar/Nav_bar';
import Cards from './Components/Cards/Cards';

function App() {
  return (
    <Box className="App">
      <NavBar/>
      <Cards/>
    </Box>
  );
}

export default App;
