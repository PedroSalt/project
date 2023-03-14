import { createContext, useState } from "react";
import "./App.css";
import { Gallery } from "./Gallery";

export const MyContext = createContext("undefined");

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <MyContext.Provider value={theme}>
        <div className="App">
          <Gallery />
        </div>
      </MyContext.Provider>
    </>
  );
}

export default App;
