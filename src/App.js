import React from "react";
import FormMonth from "./components/main/form-add-month/FormMonth";
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
          <FormMonth/>
        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
