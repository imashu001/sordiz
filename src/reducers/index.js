import { combineReducers } from "redux";
import tableReducer from "./reducer_table";
const rootReducer = combineReducers({
  table: tableReducer,
});

export default rootReducer;
