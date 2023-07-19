import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement as HTMLElement).render(
  <BrowserRouter>
    <React.Fragment>
      <Routing />
      {/* The various pages will be displayed by the `Main` component. */}
    </React.Fragment>
  </BrowserRouter>
);
