import { useObserver } from "mobx-react";
import React, { useContext } from "react";
import { StoreContext } from "./App";

function BugsHeader() {
  const store = useContext(StoreContext);

  return useObserver(() => <div>{store.bugsCount} Bugs!</div>);
}

export default BugsHeader;
