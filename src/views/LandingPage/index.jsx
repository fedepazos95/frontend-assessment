import React from 'react';
import {
  Container, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// components
import Header from 'components/Header';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Towns
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Select a Town of the list to start exploring!
        </Typography>
      </Container>
    </div>
  );
}
