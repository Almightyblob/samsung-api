import React from "react";
import "./App.css";
import DisplayResults from "./components/DisplayResults";
import MainMenu from "./components/MainMenu";

function App() {
  return (
    <div className="w-full h-full">
      <MainMenu />
      <div className="lg:w-3/4 mx-auto">
        <DisplayResults />
      </div>
    </div>
  );
}

export default App;
