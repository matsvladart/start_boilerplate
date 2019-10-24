import * as types from "../action.constant";
import axios from "axios";

export const setYearAction = data => {
  return {
    type: types.SET_YEAR,
    payload: axios.get(``).then(res => res.data)
  };
};
