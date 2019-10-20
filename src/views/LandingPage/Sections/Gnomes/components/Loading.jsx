import React from 'react';
import GridContainer from 'components/GridContainer';
import { ClipLoader } from 'react-spinners';
import { makeStyles } from '@material-ui/core/styles';
import styles from './loadingStyle';

const useStyles = makeStyles(styles);

export default function Loading() {
  const classes = useStyles();

  return (
    <GridContainer className={classes.flexCenter}>
      <ClipLoader size={30} color="orange" />
    </GridContainer>
  );
}
