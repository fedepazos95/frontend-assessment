/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from 'actions';
import GridContainer from 'components/GridContainer';
import GridItem from 'components/GridItem';
import GnomeCard from 'components/GnomeCard';
import Avatar from 'components/Avatar';
import Stats from 'components/Stats';
import { ClipLoader } from 'react-spinners';
import { Button, Tooltip } from '@material-ui/core';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import NavigateNext from '@material-ui/icons/NavigateNext';

import Loading from './components/Loading';
import NavButtons from './components/NavButtons';


import styles from './gnomesStyle';

const useStyles = makeStyles(styles);

export default function Gnomes() {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);
  const [gnomesPerPage] = useState(20);
  const { Brastlewark: gnomesList } = useSelector((state) => state.gnomes);
  const dispatch = useDispatch();

  useEffect(() => {
    // Timeout to simulate API call to show the loading spinner
    setTimeout(() => (
      dispatch(fetchData())
    ), 1200);
  }, [dispatch]);

  const handlePageChange = (action) => {
    window.scroll({ top: 600, left: 0, behavior: 'smooth' });
    // Prevent empty list
    const page = action === 'next' ? currentPage + 1 : currentPage - 1;
    setTimeout(() => {
      setCurrentPage((page < 1) ? 1 : page);
    }, 700);
  };

  const renderGnomes = () => {
    const indexOfLastGnome = currentPage * gnomesPerPage;
    const indexOfFirstGnome = indexOfLastGnome - gnomesPerPage;
    const currentGnomes = gnomesList.slice(indexOfFirstGnome, indexOfLastGnome);

    return (
      <GridContainer>
        {
          currentGnomes.map((gnome) => (
            <GridItem key={gnome.id} xs={12} sm={6} md={3}>
              <GnomeCard
                title={gnome.name}
                headerColor="primary"
                data={
                  {
                    content: (
                      <div>
                        <Avatar image={gnome.thumbnail} alt="Fulanito Pepito" />
                        <Stats age={gnome.age} weight={gnome.weight} height={gnome.height} hairColor={gnome.hair_color} />
                      </div>
                    ),
                  }
                }
              />
            </GridItem>
          ))
        }
      </GridContainer>
    );
  };

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-gnomes">
          <h3>From here you can browse all the inhabitants details.</h3>
          {
            !gnomesList
              ? <Loading />
              : renderGnomes()
          }
        </div>
        {
          gnomesList && <NavButtons page={currentPage} handlePageChange={handlePageChange} />
        }
      </div>
    </div>
  );
}
