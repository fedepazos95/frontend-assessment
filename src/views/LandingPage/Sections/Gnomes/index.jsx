/* eslint-disable max-len */
/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, setPage } from 'actions';

// Material-UI Core Components
import { makeStyles } from '@material-ui/core/styles';
// Components
import Loading from './components/Loading';
import NavButtons from './components/NavButtons';
import List from './components/List';
// Style
import styles from './gnomesStyle';

const useStyles = makeStyles(styles);

export default function Gnomes() {
  const classes = useStyles();
  const [gnomesPerPage] = useState(12);
  const { Brastlewark: gnomesList } = useSelector((state) => state.gnomes);
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();

  useEffect(() => {
    // Timeout to simulate API call to show the loading spinner
    if (!gnomesList) {
      setTimeout(() => {
        dispatch(fetchData());
      }, 1200);
    }
  }, [dispatch, gnomesList]);

  const handlePageChange = (action) => {
    window.scroll({ top: 400, left: 0, behavior: 'smooth' });
    // Prevent empty list
    const nextPage = action === 'next' ? page + 1 : page - 1;
    setTimeout(() => {
      dispatch(setPage((nextPage < 1) ? 1 : nextPage));
    }, 700);
  };

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-gnomes">
          <h3>From here you can browse all the inhabitants details.</h3>
          {
            !gnomesList
              ? <Loading />
              : <List currentPage={page} gnomesPerPage={gnomesPerPage} gnomesList={gnomesList} />
          }
        </div>
        {
          gnomesList && <NavButtons page={page} handlePageChange={handlePageChange} />
        }
      </div>
    </div>
  );
}
