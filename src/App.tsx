// import React from "react"
// import logo from "./logo.svg"
import "./App.css"
import Login from "./pages/Login"
import Nav from "./components/Nav"
function App() {
  return (
    <div className="App">
      <Nav />

      <main className="form-signin">
        <Login />
  </main>
    </div>
  )
}

export default App
