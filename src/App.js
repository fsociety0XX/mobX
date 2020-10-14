import React from "react";
import "./App.css";
import BugsList from "./BugsList";
import { useLocalStore } from "mobx-react";
import BugsForm from "./BugsForm";
import BugsHeader from "./BugsHeader";

export const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    bugs: ["butterfly"],
    addBug: (bug) => {
      store.bugs.push(bug);
    },
    get bugsCount() {
      return store.bugs.length;
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <BugsHeader />
        <BugsList />
        <BugsForm />
      </StoreProvider>
    </div>
  );
}

export default App;
