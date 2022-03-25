import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calendar from "./components/main/calendar/Calendar";
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
            }/>
            <Route path="app/calendar/:id/:yearmonth" element={
                <Calendar/>
              } />
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
