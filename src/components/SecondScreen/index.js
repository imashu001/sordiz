import React, { useEffect, useState } from "react";
import "../../../src/style/style.css";
import MenuTable from "../Menu";
import Thetable from "../TableDetails/index";

const SecondScreen = () => {
  const [state, updateState] = useState()
  const [tableProducts, updateTableproducts] = useState()
  useEffect(() => {
    async function fetchData() {
      // function to receive table number from the url parameters
      const path = window.location.pathname.split('/')
      // api call to fetch orders/table data based on the table id 
      fetch(`http://122.176.28.110/TCBROMS/v3/GetTableOrder?orderid=${path[2]}&UserId=208`)
        .then(response => response.json())
        .then(data => {
          updateState(data)
          updateTableproducts(data.tableProducts)
        })
    }
    fetchData()
  }, [])

  const addToState = (item) => {
    // function to add selected menu items to order list
    updateTableproducts(() => [...tableProducts, item])
  }

  const addQuantitiy = (item) => {
    // copy table products in newArray
    var newArray = tableProducts
    // find index of the item in the array
    const index = newArray.findIndex(object => {
      return object.ProductID === item.ProductID;
    });
    if (index !== -1) {
      // if quantity is 0 than increase by 2 else increase by 1
      newArray[index].ProductQty === 0 ? newArray[index].ProductQty = newArray[index].ProductQty + 2 : newArray[index].ProductQty = newArray[index].ProductQty + 1;
      // update state
      updateTableproducts([...newArray])
    }
  }
  const subtractQuantity = (item) => {
    // copied the table products array in a variable
    var newArray = tableProducts
    // calculate the index of the arrays
    const index = newArray.findIndex(object => {
      return object.ProductID === item.ProductID;
    });
    // if index is found
    if (index !== -1) {
      // if product quantity is greater than 1 than decrease quantity by 1
      if (newArray[index].ProductQty > 1) {
        newArray[index].ProductQty = newArray[index].ProductQty - 1
        // update state
        updateTableproducts([...newArray])
      } else {
        // if product quantity is already at 1 that is lowest than remove item from the orderlist
        const filteredArray = newArray.filter((data) => (data.ProductID !== item.ProductID))
        // update state
        updateTableproducts([...filteredArray])
      }
    }
  }


  // table headers for the ordered data
  const tableHeaders = ["Quantity", "Product", "Options", "Price", "Total", "Actions"]

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* here Thetable and MenuTable will act as the child component receiving props from the parent componet
            here add and remove are the function to increase,decrease quantity or add item as props can't be 
            changed in the children component and tableProducts and tableHeaders are data supplied to form table
        */}
        <Thetable tabledetails={tableProducts ? tableProducts : []} add={addQuantitiy} remove={subtractQuantity} tableHeaders={tableHeaders} />
        <MenuTable add={addToState} />
      </div>
    </>
  )
}


export default SecondScreen;
