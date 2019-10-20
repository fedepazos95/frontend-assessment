import React from 'react';
import PropTypes from 'prop-types';
import { Button, Tooltip } from '@material-ui/core';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import NavigateNext from '@material-ui/icons/NavigateNext';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/GridContainer';
import GridItem from 'components/GridItem';
import styles from './navButtonsStyle';

const useStyles = makeStyles(styles);

export default function NavButtons({ page, handlePageChange }) {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12} className={classes.center}>
        <Tooltip
          title="Previous page"
          placement="bottom"
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            id="previous"
            color="inherit"
            onClick={() => handlePageChange('previous')}
          >
            <NavigateBefore className={classes.socialIcons} />
          </Button>
        </Tooltip>
        <span className={classes.pageNumber}>{`Page ${page}`}</span>
        <Tooltip
          title="Next page"
          placement="bottom"
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            id="next"
            color="inherit"
            onClick={() => handlePageChange('next')}
          >
            <NavigateNext className={classes.socialIcons} />
          </Button>
        </Tooltip>
      </GridItem>
    </GridContainer>
  );
}

NavButtons.propTypes = {
  page: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};
