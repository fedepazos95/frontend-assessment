import axios from 'axios';
import config from '../config';

export const fetchData = () => async (dispatch) => {
  const res = await axios.get(config.dataUrl);
  dispatch({ type: 'fetch_data', payload: res.data });
};

export const setPage = (page) => (dispatch) => {
  dispatch({ type: 'set_page', payload: page });
};
