import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import GridContainer from 'components/GridContainer';
import GridItem from 'components/GridItem';
import GnomeCard from 'components/GnomeCard';


import styles from './tabsStyle';

const useStyles = makeStyles(styles);

export default function Tabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h3>From here you can browse all the inhabitants details.</h3>
          <GridContainer>
            <GridItem xs={12} sm={6} md={3}>
              <GnomeCard
                title="Fulanito Pepito"
                headerColor="primary"
                data={
                  {
                    content: (
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                      </p>
                    ),
                  }
                }
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
