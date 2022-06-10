//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import React from "react";
import Button from "./Button";
import Tables from "./tables";
//import TableDetails from "./tableDetails"
//import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  //  constructor(props){
  //    super(props);

  // }
  state = { tables: [] };

  handleClick = async () => {
    var config = {
      method: "get",
      //url: 'http://122.176.28.110/TCBROMS/v2/GetTablesBySection?UserID=208&sectionId=100',
      //url: 'https://jsonplaceholder.typicode.com/posts',
      url: "http://Belinnov.co.in/TCBROMS/v2/GetTablesBySection?UserID=208&sectionId=100",
    };

    await axios(config)
      .then((response) => this.setState({ tables: response.data.tablesList }))
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      
        
        <div className="container">
          <Button handleClick={this.handleClick} />
          <Tables table={this.state.tables} />
        </div>

    );
  }
}

export default App;
