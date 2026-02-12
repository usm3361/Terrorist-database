import { useState } from "react";
import { terrorists } from "./data/terrorists_data.js";
import "./App.css";
import Table from "./components/Table/Table.jsx";
import FilterBtns from "./components/FilterBtns/FilterBtns.jsx";

function App() {
  const [allTerrorists, setTerrorists] = useState(terrorists);
  const [input, setInput] = useState("");

function handleInput() {
        
    }


  return (
    <>
      <FilterBtns input={input} setInput={setInput} />
      <Table terrorists={allTerrorists} />
    </>
  );
}

export default App;
