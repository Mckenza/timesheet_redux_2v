import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormMonth from "./components/main/form-add-month/FormMonth";
import FormAdd from "./components/main/form-add/FormAdd";
import List from "./components/main/list-employees/List";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>

        </header>
        <main>
          <Routes>
            <Route path="/app" element={
              <div className='wrap_main'>
                <List />
                <FormAdd />
                <FormMonth />
              </div>
            } />
            <Route path="calendar/:id/:year-month" element={
              <h2>Тут будет календарь</h2>
            } />
            <Route />
            <Route path="/" element={
              <div>
                <h2>Привет из стартовой страницы</h2>
              </div>
            } />

          </Routes>
        </main>
        <footer>
        </footer>
      </div>
    </BrowserRouter>

  );
}

export default App;
