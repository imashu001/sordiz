import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchTables } from "../../actions";
import { Link } from "react-router-dom";
import "../../../src/style/style.css";
import MenuTable from "../Menu";

const Thetable = () => {

  const [state, updateState] = useState(null)
  const [total, setTotal] = useState()
  const handleClickAdd = (orderpartId) => {
    // console.log(state.tableProducts)
    // const filtered = state.tableProducts.filter((itm) => itm.OrderPartID === orderpartId)
    // console.log(orderpartId, filtered)
    var newstate
    state.tableProducts.map((item) => {
      console.log(orderpartId === item.OrderPartID)
      item.OrderPartID === orderpartId ? item.ProductQty = item.ProductQty + 1 : console.log("no changes")
    })

    console.log(state.tableProducts, "dd")
  };

  const handleClickSub = (orderpartId) => {
    console.log(orderpartId)
    //setState((prev) => ({ count: prev.count - 1 }));
  };

  useEffect(() => {
    async function fetchData() {
      const path = window.location.pathname.split('/')
      fetch(`http://122.176.28.110/TCBROMS/v3/GetTableOrder?orderid=${path[2]}&UserId=208`)
        .then(response => response.json())
        .then(data => updateState(data));
    }
    fetchData()
  }, [])


  var count = 0

  return (
    <div className="container d-flex" style={{ display: "inline-block" }}>
      <div>
        <div>
          <button className="btn btn-sm btn-outline mt-3">
            <Link className="textLink" to="/" >
              {" "}
              Back
            </Link>
          </button>
        </div>
        <table className="table table-bordered mt-2 table-striped" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th scope="col">Q</th>
              <th scope="col">Product</th>
              <th scope="col">Options</th>
              <th scope="col">Price</th>
              <th scope="col">Total</th>
              <th scope="col">Add</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {console.log(state && state.tableProducts, "table produces")}
            {state && state.tableProducts.map((item) => {
              return (
                <tr key={item.OrderPartID}>
                  <th scope="row" id="quantity">{item.ProductQty}</th>
                  <td>{item.Description}</td>
                  <td></td>
                  <td>${item.Price}</td>
                  <td>${item.Price * item.ProductQty}</td>
                  <td
                    style={{ cursor: "pointer", fontWeight: "bold" }}
                    onClick={(orderpartID) => { handleClickAdd(item.OrderPartID) }}
                  > <button className="rounded text-center btn btn-outline-dark btn-sm fw-bold border">
                      +
                    </button>
                  </td>
                  <td className="text-center"
                    style={{ cursor: "pointer", fontWeight: "bold" }}
                    onClick={(orderpartId) => { this.handleClickSub(item.OrderPartID) }}
                  >
                    <button className="rounded text-center btn btn-outline-dark btn-sm fw-bold border">
                      -
                    </button>
                  </td>
                </tr>
              )
            })}
            {/* {console.log(state.tableProducts)} */}
            {/* {state && } */}

          </tbody>
        </table>
        <div style={{ width: "50%" }}>

          <div className="d-flex justify-content-between" >

            {state && state.tableProducts.map((itm) => {
              count = count + (itm.ProductQty * itm.Price)
              // console.log(itm.ProductQty * itm.Price)
            })}
            <div> Sub Total: ${count} </div>

            <div>
              <button className="btn btn-md btn-outline">
                <Link className="textLink" to="/payment">Pay</Link>
              </button>
            </div>


          </div>
        </div>

      </div>
      <div> <MenuTable />  </div>
    </div>
  );
  // }
}




export default Thetable;
