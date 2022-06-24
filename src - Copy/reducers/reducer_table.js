import _ from "lodash";
import { FETCH_TABLES } from "../actions";

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_TABLES:
      //console.log(action.payload)
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
