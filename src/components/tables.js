import React from "react";
import { Link } from "react-router-dom";
import "../../src/style/style.css";
const tables = (props) => {
  //const table = props.table.tablesList;
  console.log(props.table);

  return (
    <div className="container mb-3">
      <div>
        <ul className="list-group list-group-horizontal d-inline-block bg-light bg-gradient">
          {props.table.map((item) => (
            <li
              key={item.TableID}
              className="list-group-item"
              style={{
                backgroundColor:
                  item.CurrentStatus === 6
                    ? "Orange"
                    : item.CurrentStatus === 11
                    ? "#7b68ee"
                    : item.CurrentStatus === 1
                    ? "#FFADD8E6"
                    : item.CurrentStatus === 2
                    ? "# #FFDB7093"
                    : item.CurrentStatus === 3
                    ? "##8B008B"
                    : item.CurrentStatus === 4
                    ? "##FF800080"
                    : item.CurrentStatus === 5
                    ? "#FFFFFF00"
                    : item.CurrentStatus === 7
                    ? "# #A2CD5A"
                    : item.CurrentStatus === 8
                    ? "#CD853F"
                    : item.CurrentStatus === 9
                    ? "#A9A9A9"
                    : item.CurrentStatus === 10
                    ? "#00FF00"
                    : item.CurrentStatus === 11
                    ? "#7b68ee"
                    : item.CurrentStatus === 12
                    ? "#D1001C"
                    : item.CurrentStatus === 13
                    ? "#000000"
                    : item.CurrentStatus === 14
                    ? "#0052a2"
                    : "",
                color: "black",
                width: "7%",
                margin: "20px 15px 20px 30px",
                padding: "0px 5px 0px 5px",
                cursor: "pointer",
                border: "1px solid red",
                float: "left",
                listStyle: "none",
                borderRadius: "10px",
              }}
            >
              <Link className="textLink"  to={`/tabledetails/${item.OrderGUID}`} >
                <span style={{ fontSize: "12px", float: "left" }}>
                  {item.OccupiedTime}
                </span>
                <br />
                <span className="mx-4" style={{ fontWeight: "bold" }}>
                  {item.TableNumber}
                </span>
                <br />
                <span
                  style={{
                    fontSize: "12px",
                    float: "left",
                    visibility: `${item.AdCount === 0 ? "hidden" : ""}`,
                  }}
                >
                  {item.AdCount}
                  {item.JnCount}
                  {item.KdCount}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default tables;
