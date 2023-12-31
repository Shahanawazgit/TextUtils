import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#091e39";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.background = "url('https://images.unsplash.com/photo-1526280524276-51b1c8a46321?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')";
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <>
      <Main>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils - Word counter, Character counter, Case convertor, Extra spaces remover"
                  mode={mode}
                />
              }
            />

            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Main>
    </>
  );
}

export default App;
