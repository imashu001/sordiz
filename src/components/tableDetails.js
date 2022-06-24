import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTables } from "../actions";
import { Link } from "react-router-dom";
import "../../src/style/style.css";
import MenuTable from "./Menu";

class tableDetail extends Component {
  //   consoleLog() {
  //     console.log(this.props.tableId.state);
  // }

  // constructor(props){
  //   super(props)
  //   console.log(this.props)
  // }


  state = {
    count: "10",
    tableDetailData: {},
    tableProductData: {},
    tableId: "7f69fa59-a820-4597-b50d-1eea59952be6",
    userId: "UserId=208"
  };

  handleClickAdd = (orderpartId) => {
    console.log(orderpartId)

    //this.setState((prev) => ({ count: prev.count + 1 }));
  };


  //   handleClickAdd = (counts) => {
  //     console.log(counts)

  //     this.setState({count: counts+1})

  //     //this.setState((prev) => ({ count: prev.count + 1 }));
  // console.log(this.state.count)
  //   };

  handleClickSub = (orderpartId) => {
    console.log(orderpartId)
    //this.setState((prev) => ({ count: prev.count - 1 }));
  };



  // componentDidMount(tableId = "1e75537f-8e14-470a-8014-a5dc6cb62300") {
  //componentDidMount(tableId = "1e75537f-8e14-470a-8014-a5dc6cb62300", id) {
  componentDidMount() {
    //console.log(tableId, id)
    // return this.props.fetchTables();
    //const ROOT_URL = "http://122.176.28.110/TCBROMS/v3/GetTableOrder?orderid=1e75537f-8e14-470a-8014-a5dc6cb62300&UserId=208";
    //const ROOT_URL = `http://122.176.28.110/TCBROMS/v3/GetTableOrder?orderid=${tableId}&UserId=208`;
    const path = window.location.pathname.split('/')
    const ROOT_URL = `http://122.176.28.110/TCBROMS/v3/GetTableOrder?orderid=${path[2]}&${this.state.userId}`;
    fetch(ROOT_URL)
      .then(response => response.json())
      .then((data => this.setState({ tableDetailData: data })));

    // fetch(ROOT_URL)           
    // .then(response => response.json())
    // .then((data => this.setState({tableProductData: data})));
    console.log(path)
  }



  render() {
    //console.log(this.state.tableId)
    //console.log(this.state.userId)
    //console.log(this.state.tableProductData.tableDetails)

    // console.log(window.location.pathname)



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

              {
                this.state?.tableDetailData && this.state?.tableDetailData?.tableProducts?.map(item =>
                  //<tr key={item.OrderPartID}>
                  <tr key={item.OrderPartID}>
                    <th scope="row" id="quantity">{item.ProductQty}</th>
                    <td>{item.Description}</td>
                    <td></td>
                    <td>${item.Price}</td>
                    <td>${item.Price * item.ProductQty}</td>
                    <td
                      style={{ cursor: "pointer", fontWeight: "bold" }}
                      onClick={(orderpartID) => { this.handleClickAdd(item.OrderPartID) }}
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
              }


            </tbody>
          </table>
          <div style={{ width: "50%" }}>

            <div className="d-flex justify-content-between" >
              {/* {
           this.state.tableProductData.map((item) =>
           <div key={item.TableID}> Sub Total: ${item.CurrentTotal}  </div>)
           } */}



              <div> Sub Total: $49.290 </div>

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
  }
}



function mapStateToProps(state) {
  //console.log(state.table);
  return { table: state.table };
}
export default connect(mapStateToProps, { fetchTables })(tableDetail);
