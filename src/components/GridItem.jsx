import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const styles = {
  grid: {
    position: 'relative',
    width: '100%',
    minHeight: '1px',
    paddingRight: '15px',
    paddingLeft: '15px',
    flexBasis: 'auto',
  },
};

const useStyles = makeStyles(styles);

export default function GridItem(props) {
  const {
    children, className, xs, sm, md,
  } = props;
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
