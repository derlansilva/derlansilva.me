import React from 'react';
import './App.css';
import Rotas from './routes';


import './App.css'
import Background from './pages/components/background';
//import Router from './routes';
function App() {
  return (
    <div className="container">
      <Background/>
        <Rotas/>
    </div>
  );
}

export default App;
