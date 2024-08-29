import React from "react";
import "./App.css";
import Login from "./auth/Login";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Login />
      <Main />
    </div>
  );
}

export default App;
