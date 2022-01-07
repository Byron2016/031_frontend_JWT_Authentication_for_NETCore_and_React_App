import { useState, useEffect } from "react"
// import logo from "./logo.svg"
import "./App.css"
import Login from "./pages/Login"
import Nav from "./components/Nav"
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

// INICIO  midudev
import {ListElements, ListElementsDos, ListElementsTres} from "./de_midudev/de_listado/src/pages/ListElements/ListElements";
import {ListElementsDB} from "./de_midudev/de_listado/src/pages/ListElementsDB/ListElementsDB";

// FIN midudev 

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

  return (
    <div className="App">
      <BrowserRouter>
        <Nav name = { name } setName={setName} />
        <main className="form-signin">
          <Routes>
          <Route path="/" element={<Home name = { name } email = {email} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* INICIO rutas midudev */}
          <Route path="/listelements" element={<ListElements />} />
          <Route path="/listelementsdos" element={<ListElementsDos />} />
          <Route path="/listelementstres" element={<ListElementsTres />} />
          <Route path="/listelementdb" element={<ListElementsDB />} />
          {/* FIN rutas midudev */}
          </Routes>
        </main>
      </BrowserRouter>

    </div>
  )
}

export default App
