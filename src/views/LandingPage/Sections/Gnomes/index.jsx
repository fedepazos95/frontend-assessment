/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from 'actions';

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
  const [currentPage, setCurrentPage] = useState(1);
  const [gnomesPerPage] = useState(12);
  const { Brastlewark: gnomesList } = useSelector((state) => state.gnomes);
  const dispatch = useDispatch();

  useEffect(() => {
    // Timeout to simulate API call to show the loading spinner
    if (!gnomesList) {
      setTimeout(() => (
        dispatch(fetchData())
      ), 1200);
    }
  }, [dispatch, gnomesList]);

  const handlePageChange = (action) => {
    window.scroll({ top: 600, left: 0, behavior: 'smooth' });
    // Prevent empty list
    const page = action === 'next' ? currentPage + 1 : currentPage - 1;
    setTimeout(() => {
      setCurrentPage((page < 1) ? 1 : page);
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
              : <List currentPage={currentPage} gnomesPerPage={gnomesPerPage} gnomesList={gnomesList} />
          }
        </div>
        {
          gnomesList && <NavButtons page={currentPage} handlePageChange={handlePageChange} />
        }
      </div>
    </div>
  );
}
