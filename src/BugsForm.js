import React, { useState } from "react";
import { useContext } from "react";
import { StoreContext } from "./App";

function BugsForm() {
  const [bug, setBug] = useState("");
  const store = useContext(StoreContext);

  const onSubmit = (e) => {
    e.preventDefault();
    store.addBug(bug);
    setBug("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="bug"
          placeholder="add a bug"
          value={bug}
          onChange={(e) => setBug(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default BugsForm;
