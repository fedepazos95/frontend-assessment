import React from 'react';
import {
  AppBar, Toolbar, Typography, Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from './headerStyle';

const useStyles = makeStyles(styles);

export default function Header() {
  const classes = useStyles();
  const brandComponent = <Button className={classes.title}>{brand}</Button>;
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Album layout
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
