import React from "react";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import "./dist/output.css";
function App() {
  return (
    <div className="App flex flex-col items-center justify-center">
      <Header />
      <div>
        <ItemList />
      </div>
    </div>
  );
}

export default App;
