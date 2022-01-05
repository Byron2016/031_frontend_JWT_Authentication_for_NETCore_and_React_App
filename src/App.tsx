import { useState, useEffect } from "react"
// import logo from "./logo.svg"
import "./App.css"
import Login from "./pages/Login"
import Nav from "./components/Nav"
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  // const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  

  useEffect(() => {
    (
      async() => {
        const response =await fetch(
          'http://localhost:8000/api/user',
          {
            headers: {
              'Content-Type':'application/json'
            },
            credentials: 'include',
          }
        );

        const content = await response.json();
        setName(content.name);
        setEmail(content.email);

      }
    )();
  })

    // console.log({
    //   'lugar':'En App.tsx',
    //   name,
    //   email,
    // })
    // <Route path="/" element={<Home  name = { name } email = {email} />} />
  return (
    <div className="App">
      <BrowserRouter>
        <Nav name = { name }/>
        <main className="form-signin">
          <Routes>
          <Route path="/" element={<Home name = { name } email = {email} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </BrowserRouter>

    </div>
  )
}

export default App
