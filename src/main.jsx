import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import favouriteSlice from "./store/slices/favouriteSlice.js";
import logger from "redux-logger";
import { Provider } from "react-redux";

const store = configureStore(
  {
    reducer: {
      favourite: favouriteSlice,
    },
  },
  applyMiddleware(logger)
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
