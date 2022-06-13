import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import TableDetails from "./components/tableDetails";
import Payment from "./components/Payment";
//import promise from "redux-promise";
import { Provider } from 'react-redux';
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/TableDetails" element={<TableDetails />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>
  ,
  document.querySelector("#root")
);

