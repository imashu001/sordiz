import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
// import TableDetails from "./components/tableDetails";
import Thetable from "./components/TableDetails/index";

import Payment from "./components/Payment";
//import promise from "redux-promise";
import { Provider } from 'react-redux';
import store from "./store";
import Apphome from "./components/Home";
import SecondScreen from "./components/SecondScreen";
import Admin from "./components/AdminLogin/index";
import ErrorPage from "./components/Error/index";
// import Thetable from "./components/TableDetails";

function App() {
  const loggedin = false
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/TableDetails/:Orderid/:tableId" element={<SecondScreen />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/login" element={<Admin />} />
          <Route path="/Home" element={<Apphome />} />
          <Route path="/" element={<Admin />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;
