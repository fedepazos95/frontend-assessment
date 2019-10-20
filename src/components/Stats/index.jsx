import React from 'react';
import PropTypes from 'prop-types';

// Material-UI Core Components
import { makeStyles } from '@material-ui/core/styles';
import Event from '@material-ui/icons/Event';
import FitnessCenter from '@material-ui/icons/FitnessCenter';
import Height from '@material-ui/icons/Height';
import Palette from '@material-ui/icons/Palette';
// Components
import GridContainer from 'components/GridContainer';
import GridItem from 'components/GridItem';
// Style
import styles from './statsStyle';

const useStyles = makeStyles(styles);

export default function Stats({
  age, weight, height, hairColor,
}) {
  const classes = useStyles();
  return (
    <div className={classes.stats}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} className={classes.statItem}>
          <Event className={classes.icons} />
          {`Age ${age}`}
        </GridItem>
        <GridItem xs={12} sm={12} md={12} className={classes.statItem}>
          <FitnessCenter className={classes.icons} />
          {`Weight: ${weight}`}
        </GridItem>
        <GridItem xs={12} sm={12} md={12} className={classes.statItem}>
          <Height className={classes.icons} />
          {`Height: ${height}`}
        </GridItem>
        <GridItem xs={12} sm={12} md={12} className={classes.statItem}>
          <Palette className={classes.icons} />
          {`Hair Color: ${hairColor}`}
        </GridItem>
      </GridContainer>
    </div>
  );
}

Stats.propTypes = {
  age: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  hairColor: PropTypes.string.isRequired,
};
