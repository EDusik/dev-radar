import React, { useState, useEffect } from 'react';

import api from  './services/api';
import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

import './App.css';
import './global.css';
import './Main.css'
import './Sidebar.css'

function App() {

  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }

    loadDevs();
  }, []);


  async function handleAddDev(data) {    
    const response = await api.post('/devs', data);
  
    setDevs([...devs, response.data]);
  } 

  return (
    <div id="app">
      <aside>
        <strong>Register</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}         
        </ul>
      </main>
    </div>
  );
}

export default App;
