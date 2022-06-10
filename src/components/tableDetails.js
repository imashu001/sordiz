import React, {Component} from "react";
import { connect } from "react-redux";
import { fetchTables } from "../actions";

class tableDetail extends Component{
componentDidMount(){
    this.props.fetchTables();
}

    render(){
        return(
            <div>
                Table Details
            </div>
        );
    }
} 
export  default connect(null, {fetchTables}) (tableDetail);