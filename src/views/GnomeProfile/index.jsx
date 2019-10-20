/* eslint-disable global-require */
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';

// Material-UI Core Components
import { makeStyles } from '@material-ui/core/styles';
import WorkIcon from '@material-ui/icons/Work';
import PeopleIcon from '@material-ui/icons/People';
// Components
import GridContainer from 'components/GridContainer';
import GridItem from 'components/GridItem';
import Header from 'components/Header';
import HeaderLinks from 'components/Header/Links';
import Parallax from 'components/Parallax';
import Footer from 'components/Footer';
import Avatar from 'components/Avatar';
import Stats from 'components/Stats';
import GnomeFieldList from 'components/GnomeFieldList';
// Style
import styles from './gnomeProfileStyle';

const useStyles = makeStyles(styles);

function GnomeProfile({ history, match }) {
  const classes = useStyles();
  const gnome = useSelector((state) => (state.gnomes.Brastlewark
    ? state.gnomes.Brastlewark.find((e) => e.id === parseInt(match.params.id, 10))
    : null));
  if (!gnome) {
    history.push('/');
    return null;
  }
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
              <div className={classes.brand}>
                <h1 className={classes.title}>{gnome.name}</h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised, classes.textCenter)}>
        <Avatar image={gnome.thumbnail} />
        <Stats age={gnome.age} weight={gnome.weight} height={gnome.height} hairColor={gnome.hair_color} />
        <GridContainer>
          <GridItem xs={12} md={6} sm={6}>
            <GnomeFieldList title="Jobs" list={gnome.professions} icon={<WorkIcon />} />
          </GridItem>
          <GridItem xs={12} md={6} sm={6}>
            <GnomeFieldList title="Friends" list={gnome.friends} icon={<PeopleIcon />} />
          </GridItem>
        </GridContainer>
      </div>

      <Footer />
    </div>
  );
}

GnomeProfile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
    goBack: PropTypes.func,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default withRouter(GnomeProfile);
