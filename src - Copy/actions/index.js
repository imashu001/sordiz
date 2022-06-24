import axios from "axios";
export const FETCH_TABLES = "fetch_tables";

const ROOT_URL =
  "http://122.176.28.110/TCBROMS/v3/GetTableOrder?orderid=B4476988-4266-4DC9-8446-69B1660FF7FD&UserId=208";
//const API_KEY = "Key123";

export function fetchTables() {
  const request = axios.get(`${ROOT_URL}`);
  return {
    type: FETCH_TABLES,
    payload: request
  };
}
