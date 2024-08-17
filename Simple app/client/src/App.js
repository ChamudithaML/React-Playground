import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cat from './components/Cat';
import Games from './components/Games';
import Movies from './components/Movies';

function App() {

  return (
    <div className="d-flex justify-content-center align-items-center">
      {/* <Cat /> */}
      {/* <Games /> */}
      <Movies />
    </div>
  );
}

export default App;
