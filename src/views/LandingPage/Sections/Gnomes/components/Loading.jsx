import React from 'react';

// Material-UI Core Components
import { makeStyles } from '@material-ui/core/styles';
// Components
import GridContainer from 'components/GridContainer';
import { ClipLoader } from 'react-spinners';
// Style
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
