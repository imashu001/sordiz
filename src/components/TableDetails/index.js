import React from "react";
import { Link } from "react-router-dom";
import "../../../src/style/style.css";

const Thetable = ({ tabledetails, add, remove, tableHeaders }) => {

  const handleClickSub = (orderpartId) => {
    console.log(orderpartId)
    //setState((prev) => ({ count: prev.count - 1 }));
  };

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
                  <td style={{
                    maxWidth: "18px",
                    overflow: "hidden",
                    textOverflow: "clip"
                  }}>${item.Price * (item.ProductQty || 1)}</td>
                  <td
                    className="text-center"
                    style={{ cursor: "pointer", fontWeight: "bold" }}
                    onClick={(orderpartID) => { add(item) }}
                  > <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                      <button className="rounded text-center btn btn-outline-dark btn-sm fw-bold border">
                        +
                      </button>
                      <button className="rounded text-center btn btn-outline-dark btn-sm fw-bold border">
                        -
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div style={{ width: "50%" }}>

          <div className="d-flex justify-content-between" >

            {tabledetails && tabledetails.map((itm) => {
              count = count + ((itm.ProductQty || 1) * itm.Price)
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
    </div>
  );
  // }
}




export default Thetable;
