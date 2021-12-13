import React, {Fragment} from 'react';
import LandingPage from "./home/LandingPage";
import StudentsPage from "./students/StudentsPage";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Fragment>
      <Routes>
        <Route exact path="/" element={<LandingPage />}>
        </Route>
        <Route exact path="/students" element={<StudentsPage />}>
        </Route></Routes>
        </Fragment>
    </Router>
  )
}

export default App;
