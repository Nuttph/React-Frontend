import React from "react";
import "./App.css";
import Login from "./auth/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./test/Test";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Login />
              </div>
            }
          />
          <Route
            path="/test"
            element={
              <div>
                <Test />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
