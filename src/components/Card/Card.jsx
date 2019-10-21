import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material-UI Core Components
import { makeStyles } from '@material-ui/core/styles';
// Style
import styles from './cardStyle';

const useStyles = makeStyles(styles);

export default function Card({ className, children }) {
  const classes = useStyles();
  const cardClasses = classNames({
    [classes.card]: true,
    [className]: className !== undefined,
  });

  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
