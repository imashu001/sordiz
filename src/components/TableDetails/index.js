import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Thetable = ({ tabledetails, add, remove, tableHeaders }) => {


  // function to finally submit or modify orders
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
              {/* ṣhowing table headers over the array of headers we got from props */}
              {tableHeaders.map((item) => {
                return (
                  <th scope="col">{item}</th>
                )
              })}
            </tr >
          </thead >

          <tbody>
            {/* showing the table details by mapping over the array of ordered details of product */}
            {tabledetails && tabledetails.map((item) => {
              return (
                <tr key={item.OrderPartID}>
                  {/* if product quantity is 0 it will show 1 */}
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

                  > <button className="rounded text-center btn btn-outline-dark btn-sm fw-bold border" onClick={(orderpartID) => { add(item) }}>
                      +
                    </button>
                    <button className="rounded text-center btn btn-outline-dark btn-sm fw-bold border" onClick={(orderpartID) => { remove(item) }}>
                      -
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody >
        </table >
        <div style={{ width: "50%" }}>

          <div className="d-flex justify-content-between" >
            {/* calculating the total price of the cart/table orders by mapping over it */}

            {tabledetails && tabledetails.map((itm) => {
              count = count + ((itm.ProductQty || 1) * itm.Price)
            })
            }
            <div> Sub Total: ${count} </div>

            <div>
              {/* payment button */}
              <button className="btn btn-md btn-outline">
                <Link className="textLink" to="/payment">Pay</Link>
              </button>
            </div>


          </div >
        </div >

      </div>
    </div>
  );
  // }
}




export default Thetable;
