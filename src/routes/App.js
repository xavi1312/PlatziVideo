import React from "react";
// Utilities
import { BrowserRouter, Route } from "react-router-dom";
// Components
import Home from "../containers/Home";

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
  </BrowserRouter>
);

export default App;
