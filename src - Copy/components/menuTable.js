import React, { Component } from "react";
//import { connect } from 'react-redux'
//import { Link } from 'react-router-dom';
import "../../src/style/style.css";

export class menuTable extends Component {
  state = {
    MenuData: {},
  };
  componentDidMount() {
    const ROOT_URL =
      "http://122.176.28.110/tcbroms/v3/GetDineInProducts?orderId=A8CA4B6C-78CB-4BBD-B9A9-883A8B0EB612";
    fetch(ROOT_URL)
      .then((response) => response.json())
      .then((data) => this.setState({ MenuData: data }));
  }
  render() {
    console.log(this.state.MenuData);
    return (
      <div className="container mt-3">
        <div ><h5  className="text-center mb-3">Add Items</h5></div>
          <div className="border ">
          <ul className="list-group list-group-horizontal bg-light rounded-0 d-flex flex-wrap">
            {this.state?.MenuData &&
              this.state?.MenuData?.DrinksMenu?.map((item) => (
                <li
                 key={item.Group.SortOrder}
                  className="list-group-item rounded-3 hoverList d-inline-block mx-3 my-3 text-center"
                  style={{width:"55px"}}
                >
                  {/* {item.GroupProducts.map((maped)=>(
                 
                  ))} */}
                 
                </li>
              ))}
          </ul>
        </div>
        </div>
      
    );
  }
}

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(menuTable)

export default menuTable;
