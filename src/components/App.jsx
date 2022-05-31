import React, { useState } from "react";

function App() {
  const [values, setValues] = useState([""]);
  const [item, setItem] = useState("");

  function handleChange(event) {
    setItem(event.target.value);
  }

  function addItem() {
    setValues((prev) => [
      ...prev,
      <div>
        <li> {item} </li>
      </div>
    ]);
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} name="newItem" value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{values}</ul>
      </div>
    </div>
  );
}

export default App;
