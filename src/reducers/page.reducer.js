import * as types from "../actions/action.constant";
const initialState = {
  year: 2018,
  data: [],
  fetching: false
};

export const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_YEAR_PENDING:
      return { ...state, fetching: true };
    case types.SET_YEAR_FULFILLED:
      return { ...state, fetching: false, data: action.payload };
    case types.SET_YEAR_REJECTED:
      return { ...state, fetching: false, data: [], error: true };
    default:
      return state;
  }
};
