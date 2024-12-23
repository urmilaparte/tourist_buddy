import React from "react";
import Header from "./component/Header";
import HomePage from "./component/HomePage";
import Homestays from "./component/Homestays";
import Contact from "./component/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <HomePage /> */}
      <Homestays />
      <Contact />
    </div>
  );
}

export default App;