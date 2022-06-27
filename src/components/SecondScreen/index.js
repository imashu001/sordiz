import React, { useEffect, useState } from "react";
import "../../../src/style/style.css";
import MenuTable from "../Menu";
import Thetable from "../TableDetails/index";

const SecondScreen = () => {
  const [state, updateState] = useState()
  const [tableProducts, updateTableproducts] = useState()




  useEffect(() => {
    async function fetchData() {
      const path = window.location.pathname.split('/')
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
    updateTableproducts(() => [...tableProducts, item])
  }

  const addQuantitiy = (item) => {
    var newArray = tableProducts
    const index = newArray.findIndex(object => {
      return object.ProductID === item.ProductID;
    });
    if (index !== -1) {
      newArray[index].ProductQty === 0 ? newArray[index].ProductQty = newArray[index].ProductQty + 2 : newArray[index].ProductQty = newArray[index].ProductQty + 1;
      updateTableproducts([...newArray])
    }
  }
  const subtractQuantity = (item) => {
    var newArray = tableProducts
    const index = newArray.findIndex(object => {
      return object.ProductID === item.ProductID;
    });
    if (index !== -1) {
      if (newArray[index].ProductQty > 1) {
        newArray[index].ProductQty = newArray[index].ProductQty - 1
        updateTableproducts([...newArray])
      } else {
        const filteredArray = newArray.filter((data) => (data.ProductID !== item.ProductID))
        updateTableproducts([...filteredArray])
      }
    }
  }



  const tableHeaders = ["Quantity", "Product", "Options", "Price", "Total", "Actions"]

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Thetable tabledetails={tableProducts ? tableProducts : []} add={addQuantitiy} remove={subtractQuantity} tableHeaders={tableHeaders} />
        <MenuTable add={addToState} />
      </div>
    </>
  )
}


export default SecondScreen;
