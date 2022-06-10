import axios from "axios";
export const FETCH_TABLES = "fetch_tables";

const ROOT_URL =
  "http://belinnov.co.in/TCBROMS/v2/GetTablesBySection?UserID=208&sectionId=100";
const API_KEY = "Key123";

export function fetchTables() {
  const request = axios.get(`${ROOT_URL}${API_KEY}`);
  return {
    type: FETCH_TABLES,
    payload: request,
  };
}
