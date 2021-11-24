import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Batiments from "./components/Batiment.component";
import FicheProduit from "./components/FicheProduit.component";

ReactDOM.render(
  <BrowserRouter>
    <FicheProduit />
    <Batiments />
  </BrowserRouter>,
  document.getElementById("root")
);
