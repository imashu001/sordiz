import axios from "axios";


const URL = "http://122.176.28.110/TCBROMS/v2/GetTablesBySection?UserID=208&sectionId=100";

export default axios.create({
    baseURL : URL,

})