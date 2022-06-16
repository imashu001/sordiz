import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTables } from "../actions";
import { Link } from "react-router-dom";
import "../../src/style/style.css";
import { toInteger } from "lodash";

class tableDetail extends Component {
  state = {
    count: "",
    tableDetailData: {}
  };

  handleClickAdd = (orderpartId) => {
    console.log(orderpartId)
    //this.setState((prev) => ({ count: prev.count + 1 }));
  };

  handleClickSub = (orderpartId) => {  
    console.log(orderpartId)
    this.setState((prev) => ({ count: prev.count - 1 }));
  };

  componentDidMount(tableId) {
    console.log(tableId)
    // return this.props.fetchTables();
    const ROOT_URL = "http://122.176.28.110/TCBROMS/v3/GetTableOrder?orderid=8acf2adb-44a5-49b3-86c4-f4737fca8e14&UserId=208";
    fetch(ROOT_URL)           
        .then(response => response.json())
        .then(data => this.setState({tableDetailData: data}));
  }

  render() {
    return (
      <div className="container" style={{ display: "inline-block" }}>
        <div>
          <button className="btn btn-sm btn-outline  mt-3">
            <Link className="textLink" to="/" >
              {" "}
              Back
            </Link>
          </button>
        </div>
        <table className="table table-bordered mt-4 " style={{ width: "50%" }}>
          <thead>
            <tr>
              <th scope="col">Q</th>
              <th scope="col">Product</th>
              <th scope="col">Options</th>
              <th scope="col">Price</th>
              <th scope="col">Total</th>
              <th scope="col">+</th>
              <th scope="col">-</th>
            </tr>
          </thead>
          <tbody>

          {
            this.state?.tableDetailData &&  this.state?.tableDetailData?.tableProducts?.map(item => 
              //<tr key={item.OrderPartID}>
              <tr key={item.OrderPartID}>
              <th scope="row" id="quantity">{item.ProductQty}</th>
              <td>{item.Description}</td>
              <td></td>
              <td>${item.Price}</td>
              <td>${item.Price * item.ProductQty}</td>
              <td
                style={{ cursor: "pointer", fontWeight: "bold" }}
                onClick={(orderpartID)=>{this.handleClickAdd(item.OrderPartID)}}
              >
                +
              </td>
              <td
                style={{ cursor: "pointer", fontWeight: "bold" }}
                onClick={(orderpartId)=>{this.handleClickSub(item.OrderPartID)}}
              >
                - 
              </td>
            </tr>
            )
          }

           
          </tbody>
        </table>
        <div style={{ width: "50%" }}>
          <div className="d-flex justify-content-between" >
            <div> Sub Total: $00.00  </div>
            <div>
              <button className="btn btn-md btn-outline">
                <Link className="textLink" to="/payment">Pay</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //console.log(state.table);
  return { table: state.table };
}
export default connect(mapStateToProps, { fetchTables })(tableDetail);
