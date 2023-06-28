import { Formulario } from './components/Formulario';
import { home } from './components/home';
import { useState } from 'react';
import './App.css';

function App() {

  const [user, setUser] = useState([])
  
  return (
    <div className="App">
      {
        !user.length > 0
          ? <Formulario setUser={setUser} /> 
          : <home user={user} setUser={ setUser} />
      }
    </div>
  )
}

export default App;

