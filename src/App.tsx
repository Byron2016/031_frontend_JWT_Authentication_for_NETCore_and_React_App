// import React from "react"
// import logo from "./logo.svg"
import "./App.css"
import Login from "./pages/Login"
import Nav from "./components/Nav"
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Nav />

      <main className="form-signin">
        <BrowserRouter>
        
          <Routes>
          {/* <Route path="/" component={Home} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
  </main>
    </div>
  )
}

export default App
