import { createReducer, updateObject } from '../helpers';

const fetchData = (gnomesState, action) => {
  return updateObject(gnomesState, action.payload);
}

const gnomesReducer = createReducer([], {
  fetch_data: fetchData
});

export default gnomesReducer;