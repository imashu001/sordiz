<<<<<<< HEAD
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
=======
import React from "react";
import { Link } from "react-router-dom";
import "../../../src/style/style.css";

const Thetable = ({ tabledetails, add, remove, tableHeaders }) => {
>>>>>>> 5537186ec2a83b99ae1eaf998a664a9db064016f

  const handleClickSub = (orderpartId) => {
    console.log(orderpartId)
    //setState((prev) => ({ count: prev.count - 1 }));
  };

<<<<<<< HEAD
  useEffect(() => {
    async function fetchData() {
      const path = window.location.pathname.split('/')
      fetch(`http://122.176.28.110/TCBROMS/v3/GetTableOrder?orderid=${path[2]}&UserId=208`)
        .then(response => response.json())
        .then(data => updateState(data));
    }
    fetchData()
  }, [])


=======
>>>>>>> 5537186ec2a83b99ae1eaf998a664a9db064016f
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
<<<<<<< HEAD
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
=======
              {tableHeaders.map((item) => {
                return (
                  <th scope="col">{item}</th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {tabledetails && tabledetails.map((item) => {
              return (
                <tr key={item.OrderPartID}>
                  <th scope="row" id="quantity">{item.ProductQty || 1}</th>
                  <td>{item.Description}</td>
                  <td></td>
                  <td>${item.Price}</td>
                  <td>${item.Price * (item.ProductQty || 1)}</td>
                  <td
                    className="text-center"
                    style={{ cursor: "pointer", fontWeight: "bold" }}
                    onClick={(orderpartID) => { add(item) }}
                  > <button className="rounded text-center btn btn-outline-dark btn-sm fw-bold border">
                      +
                    </button>
>>>>>>> 5537186ec2a83b99ae1eaf998a664a9db064016f
                    <button className="rounded text-center btn btn-outline-dark btn-sm fw-bold border">
                      -
                    </button>
                  </td>
                </tr>
              )
            })}
<<<<<<< HEAD
            {/* {console.log(state.tableProducts)} */}
            {/* {state && } */}

=======
>>>>>>> 5537186ec2a83b99ae1eaf998a664a9db064016f
          </tbody>
        </table>
        <div style={{ width: "50%" }}>

          <div className="d-flex justify-content-between" >

<<<<<<< HEAD
            {state && state.tableProducts.map((itm) => {
              count = count + (itm.ProductQty * itm.Price)
              // console.log(itm.ProductQty * itm.Price)
=======
            {tabledetails && tabledetails.map((itm) => {
              count = count + ((itm.ProductQty || 1) * itm.Price)
>>>>>>> 5537186ec2a83b99ae1eaf998a664a9db064016f
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
<<<<<<< HEAD
      <div> <MenuTable />  </div>
=======
>>>>>>> 5537186ec2a83b99ae1eaf998a664a9db064016f
    </div>
  );
  // }
}




export default Thetable;
