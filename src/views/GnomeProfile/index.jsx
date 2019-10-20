/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';


// Material-UI Core Components
import { makeStyles } from '@material-ui/core/styles';
// Components
import GridContainer from 'components/GridContainer';
import GridItem from 'components/GridItem';
import Header from 'components/Header';
import HeaderLinks from 'components/Header/Links';
import Parallax from 'components/Parallax';
import Footer from 'components/Footer';
// Style
import styles from './gnomeProfileStyle';

const useStyles = makeStyles(styles);

function GnomeProfile({ history }) {
  const classes = useStyles();
  return (
    <div>
      <Header
        brand={{ text: 'Go Back!', action: () => history.goBack() }}
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 230,
          color: 'white',
        }}
      />
      <Parallax image={require('assets/images/village.jpg')}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} md={12} sm={12}>
              <div className={classNames(classes.main, classes.mainRaised)}>
                <h1>Nombre Apellido</h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>


      <Footer />
    </div>
  );
}

GnomeProfile.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }),
};

export default withRouter(GnomeProfile);
