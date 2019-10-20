/* eslint-disable global-require */
import React from 'react';
import classNames from 'classnames';
import GridContainer from 'components/GridContainer';
import GridItem from 'components/GridItem';
import Header from 'components/Header';
import HeaderLinks from 'components/Header/Links';
import Parallax from 'components/Parallax';
import Footer from 'components/Footer';
import { makeStyles } from '@material-ui/core/styles';

import Gnomes from './Sections/Gnomes';
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
        changeColorOnScroll={{
          height: 230,
          color: 'white',
        }}
      />
      <Parallax image={require('assets/images/village3.jpg')}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} md={12} sm={12}>
              <div className={classes.brand}>
                <h1 className={classes.title}>Welcome to Brastlewark</h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <Gnomes />
      </div>
      <Footer />
    </div>
  );
}
