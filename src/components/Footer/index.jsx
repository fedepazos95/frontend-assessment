import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material-UI Core Components
import { makeStyles } from '@material-ui/core/styles';
// Style
import styles from './footerStyle';

const useStyles = makeStyles(styles);

export default function Footer({ whiteFont }) {
  const classes = useStyles();
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.right}>
          &copy;
          {`${1900 + new Date().getYear()} Frontend Assessment - by Federico Pazos`}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
