import { createReducer, updateObject } from '../helpers';

const fetchData = (gnomesState, action) => updateObject(gnomesState, action.payload);

const gnomesReducer = createReducer([], {
  fetch_data: fetchData,
});

export default gnomesReducer;
