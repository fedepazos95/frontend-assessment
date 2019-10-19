/* eslint-disable global-require */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// components
import GridContainer from 'components/GridContainer';
import GridItem from 'components/GridItem';
import Header from 'components/Header';
import HeaderLinks from 'components/Header/Links';
import Parallax from 'components/Parallax';

import styles from './landingPageStyle';

const useStyles = makeStyles(styles);

export default function LandingPage() {
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Frontend Assessment"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
      />
      <Parallax image={require('assets/images/village3.jpg')}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Welcome to Brastlewark</h1>
                <h3 className={classes.subtitle}>
                  From here you can browse all the inhabitants details.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    </div>
  );
}
