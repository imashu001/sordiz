<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import Thetable from "./components/TableDetails/index";
import Payment from "./components/Payment";
//import promise from "redux-promise";
import { Provider } from "react-redux";
import store from "./store";
import Apphome from "./components/Home";
import Admin from "./components/AdminLogin/index";
import ErrorPage from "./components/Error/index";
//import ProtectedRoute from './components/ProtectedRoutes/index'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/TableDetails/:Orderid/:tableId" element={<Thetable />} />
        <Route path="/Payment" element={<Payment />} />
        {/* <Route path="/login" element={<Admin />} /> */}
        <Route path="/Home" element={<Apphome />} />
        <Route path="/" element={<Admin />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
=======
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import App from './App'
import store from "./store"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.querySelector("#root")
);

>>>>>>> 5537186ec2a83b99ae1eaf998a664a9db064016f
