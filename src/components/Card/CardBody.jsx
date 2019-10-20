import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material-UI Core Components
import { makeStyles } from '@material-ui/core/styles';
// Style
import styles from './cardBodyStyle';

const useStyles = makeStyles(styles);

export default function CardBody({ className, children }) {
  const classes = useStyles();
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [className]: className !== undefined,
  });

  return (
    <div className={cardBodyClasses}>
      {children}
    </div>
  );
}

CardBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
