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
// import Thetable from "./components/TableDetails";

function App() {
  const loggedin = false
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/TableDetails/:Orderid/:tableId" element={<Thetable />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/login" element={<Payment />} />
          <Route path="/Home" element={<Apphome />} />
          {/* <Route
            exact
            path='/'
            render={() => {
              return (
                loggedin
                  ? <Navigate to="/home" />
                  : <Navigate to="/login" />
              )
            }}
          /> */}
          <Route path='/' element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;
