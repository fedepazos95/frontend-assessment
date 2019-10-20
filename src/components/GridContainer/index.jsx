import React from 'react';
import PropTypes from 'prop-types';

// Material-UI Core Components
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// Style
import styles from './gridContainerStyle';

const useStyles = makeStyles(styles);

export default function GridContainer({ children, className }) {
  const classes = useStyles();

  return (
    <Grid container className={`${classes.grid} ${className}`}>
      {children}
    </Grid>
  );
}

GridContainer.defaultProps = {
  className: '',
};

GridContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
