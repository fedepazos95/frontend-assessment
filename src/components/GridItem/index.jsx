import React from 'react';
import PropTypes from 'prop-types';

// Material-UI Core Components
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
// Style
import styles from './gridItemStyle';

const useStyles = makeStyles(styles);

export default function GridItem({
  children, className, xs, sm, md,
}) {
  const classes = useStyles();

  return (
    <Grid xs={xs} sm={sm} md={md} className={`${classes.grid} ${className}`} item>
      {children}
    </Grid>
  );
}

GridItem.defaultProps = {
  className: '',
};

GridItem.propTypes = {
  xs: PropTypes.number.isRequired,
  sm: PropTypes.number.isRequired,
  md: PropTypes.number.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};
