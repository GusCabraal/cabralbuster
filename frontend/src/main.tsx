import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import App from "./App";
import "./index.css";
import { queryClient } from "./utils/queryClient";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);
