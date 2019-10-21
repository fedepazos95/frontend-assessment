import { createReducer } from '../helpers';

const setPage = (gnomesState, action) => action.payload;

const gnomesReducer = createReducer(1, {
  set_page: setPage,
});

export default gnomesReducer;
