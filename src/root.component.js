import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./homepage";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Route path="/home" component={HomePage} exact />
    </BrowserRouter>
  );
}
