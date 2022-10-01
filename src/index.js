import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline } from "@mui/material";
import { configureStore } from "@reduxjs/toolkit";
import allReducers from "./redux/footerRedux/reducers";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: allReducers,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
