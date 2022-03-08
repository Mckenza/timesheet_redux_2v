import React from "react";
import FormAdd from "./components/main/form-add/FormAdd";
import List from "./components/main/list-employees/List";

function App() {
  return (
    <div className="App">
      <header>

      </header>
      <main>
        <div className='wrap_main'>
          <List/>
          <FormAdd/>
        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
