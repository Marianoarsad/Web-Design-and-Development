import { useState } from 'react'

import './App.css'

// COMPONENTS
import Login from './pages/Login.jsx';
import Inventory from './pages/Inventory.jsx';

// CONTEXT
import { AuthContextProvider } from './context/AuthContext';

function App() {

    const [ formData, setFormData ] = useState();

    async function handleLogin(e) {
        
        console.log(e.target)

        e.preventDefault();

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

        await fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {  
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

    }

  return (
    <AuthContextProvider>
      <Inventory/>
    </AuthContextProvider>
  )
}

export default App
