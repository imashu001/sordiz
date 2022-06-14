import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTables } from "../actions";
import { Link } from "react-router-dom";
import "../../src/style/style.css";

class tableDetail extends Component {
  state = {
    count: 0,
    tableDetailData: {}
  };

  handleClickAdd = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  handleClickSub = () => {
    this.setState((prev) => ({ count: prev.count - 1 }));
  };

  componentDidMount() {
    // return this.props.fetchTables();
    const ROOT_URL = "http://122.176.28.110/TCBROMS/v3/GetTableOrder?orderid=B4476988-4266-4DC9-8446-69B1660FF7FD&UserId=208";
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
              <tr>
              <th scope="row">{item.ProductQty}</th>
              <td>{item.Description}</td>
              <td></td>
              <td>${item.Price}</td>
              <td>${item.Price * item.ProductQty}</td>
              <td
                style={{ cursor: "pointer", fontWeight: "bold" }}
                onClick={this.handleClickAdd}
              >
                +
              </td>
              <td
                style={{ cursor: "pointer", fontWeight: "bold" }}
                onClick={this.handleClickSub}
              >
                -
              </td>
            </tr>
            )
          }

            <tr>
              <th scope="row">{this.state.count}</th>
              <td>Soft Drink</td>
              <td></td>
              <td>$2.00</td>
              <td>$4.00</td>
              <td
                style={{ cursor: "pointer", fontWeight: "bold" }}
                onClick={this.handleClickAdd}
              >
                +
              </td>
              <td
                style={{ cursor: "pointer", fontWeight: "bold" }}
                onClick={this.handleClickSub}
              >
                -
              </td>
            </tr>
            <tr>
              <th scope="row">{this.state.count}</th>
              <td>Weekend Lunch</td>
              <td></td>
              <td>$12.50</td>
              <td>$12.50</td>
              <td
                style={{ cursor: "pointer", fontWeight: "bold" }}
                onClick={this.handleClickAdd}
              >
                +
              </td>
              <td
                style={{ cursor: "pointer", fontWeight: "bold" }}
                onClick={this.handleClickSub}
              >
                -
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{ width: "50%" }}>
          <div className="d-flex justify-content-between" >
            <div> Sub Total: $00.00 </div>
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
