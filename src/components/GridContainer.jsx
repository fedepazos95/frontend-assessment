import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const styles = {
  grid: {
    marginRight: '-15px',
    marginLeft: '-15px',
    width: '100%',
  },
};

const useStyles = makeStyles(styles);

export default function GridContainer(props) {
  const classes = useStyles();
  const { children, className } = props;
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
