import React, { useEffect, useState } from "react";
import Tables from "../tables";

const Apphome = () => {
  const [tables, updateTables] = useState(null)

  useEffect(() => {
    async function fetchData() {
      fetch('http://Belinnov.co.in/TCBROMS/v2/GetTablesBySection?UserID=208&sectionId=100')
        .then(response => response.json())
        .then(data => updateTables(data.tablesList));
    }
    fetchData();
  }, [])

  return (
    <div className="container">
      <Tables table={tables ? tables : []} />
    </div>
  );
}

export default Apphome;
