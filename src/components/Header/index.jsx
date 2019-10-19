/* eslint-disable react/require-default-props */
import React from 'react';
import {
  AppBar, Toolbar, Typography, Button,
} from '@material-ui/core';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import styles from './headerStyle';

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  const {
    color, brand, fixed, absolute,
  } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
  });
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          {brand}
        </div>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'transparent',
    'white',
    'rose',
    'dark',
  ]),
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
};

Header.defaultProps = {
  color: 'white',
};
