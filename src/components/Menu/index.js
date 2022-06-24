import React, { useEffect, useState } from "react";
import "../../../src/style/style.css"

const Menutable = () => {
  const [menuData, setMenuData] = useState(null)
  const [selectedMenu, updateSelectedMenu] = useState("DrinksMenu")
  const [selectedGroups, updateSelectedGroups] = useState(null)
  const [display, setDisplay] = useState([])

  useEffect(() => {
    // importing the data from the server and saving it as menuData for the page when the page loads
    async function fetchData() {
      fetch('http://122.176.28.110/tcbroms/v3/GetDineInProducts?orderId=A8CA4B6C-78CB-4BBD-B9A9-883A8B0EB612')
        .then(response => response.json())
        .then(data => setMenuData(data));
    }
    fetchData();
  }, [])

  // function to change the headers of the menudata
  const changeHeaders = (headers) => {
    updateSelectedMenu(headers)
    setDisplay([])
  }

  // function to set groupName of the selected headers
  const setGroupname = (name) => {
    updateSelectedGroups(name)
    // setting of the display array which contains the data of the selected group name
    menuData[selectedMenu].map((item) => {
      item.Group.Groupname === name ? setDisplay(item.GroupProducts) : console.log("")
    })
  }
  return (
    <div className="container mt-3">
      <div>
        <h5 className="text-center mb-3">
          Add Items
        </h5>
      </div>
      <div className="border ">
        <ul className="list-group list-group-horizontal bg-light rounded-0 d-flex flex-wrap">
          {/* mapping over menudata (getting from backend and displaying the menu headers) */}
          {menuData ?
            Object.keys(menuData).map((menuheaders, index) => {
              return (
                <button key={index} onClick={() => { changeHeaders(menuheaders) }}>{menuheaders}</button>
              )
            })
            :
            <div>
              {/* while the app comes from the api we will display this as loader */}
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          }
        </ul >
        <div>
          {/* mapping over selected headers and displaying the related group names */}
          {menuData && menuData[selectedMenu].map((menugroups, index) => {
            return (
              <button key={index} style={{ backgroundColor: 'red' }} onClick={() => setGroupname(menugroups.Group.Groupname)}>{menugroups.Group.Groupname}</button>
            )
          })}
        </div>
        {/* displaying the group products related to the selected group name */}
        {
          display.map((item, index) => {
            return (
              <button onClick={() => console.log({ item })} key={index}>
                {item.Description}
              </button>
            )
          })
        }
      </div >
      <div>
        <h1>The first branch</h1>
      </div>
    </div >
  );
}


export default Menutable;
