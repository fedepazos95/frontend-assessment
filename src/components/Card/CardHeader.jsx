import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import styles from './cardHeaderStyle';

const useStyles = makeStyles(styles);

export default function CardHeader({
  className, children, color,
}) {
  const classes = useStyles();
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[`${color}CardHeader`]]: color,
    [className]: className !== undefined,
  });

  return (
    <div className={cardHeaderClasses}>
      {children}
    </div>
  );
}

CardHeader.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'primary',
  ]),
  children: PropTypes.node,
};
