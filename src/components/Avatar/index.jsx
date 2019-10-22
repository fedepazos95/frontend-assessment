import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Material-UI Core Components
import { makeStyles } from '@material-ui/core/styles';
// Style
import styles from './avatarStyle';

const useStyles = makeStyles(styles);

export default function Avatar({
  className, to, image, minHeight,
}) {
  const classes = useStyles();
  const imageClasses = classNames({
    [classes.rounded]: true,
    [classes.fluid]: true,
    [className]: className !== undefined,
  });

  const style = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    minHeight,
  };

  if (to) {
    // Wrap it as a Link if it have to prop
    return (
      <Link to={to}>
        <div
          className={imageClasses}
          style={style}
        />
      </Link>
    );
  }
  return (
    <div
      className={imageClasses}
      style={style}
    />
  );
}

Avatar.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  image: PropTypes.string.isRequired,
  minHeight: PropTypes.string.isRequired,
};
