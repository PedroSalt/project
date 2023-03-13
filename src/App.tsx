import { createContext, useContext } from "react";

import "./App.css";
import { Form } from "./Form";

const globalVar1 = createContext("hello");

function App() {
  return (
    <>
      <globalVar1.Provider value={""}>
        <div className="App">
          <Form />
        </div>
      </globalVar1.Provider>
    </>
  );
}

export default App;
