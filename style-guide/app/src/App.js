import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from './components/menu';

function App() {
  return (
    <div className="App">
      <Button variant="contained">Olá mundo!</Button>

      <Menu></Menu>
    </div>
  );
}

export default App;
