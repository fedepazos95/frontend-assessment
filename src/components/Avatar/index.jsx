import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Material-UI Core Components
import { makeStyles } from '@material-ui/core/styles';
// Style
import styles from './avatarStyle';

const useStyles = makeStyles(styles);

export default function Avatar({
 className, to, image, alt 
}) {
  const classes = useStyles();

  if (to) {
    // Wrap it as a Link if it have to prop
    return (
      <Link to={to}>
        <img
          src={image}
          alt={alt}
          className={`${classes.rounded} ${classes.fluid}`}
        />
      </Link>
    );
  }
  return (
    <img
      src={image}
      alt={alt}
      className={`${className} ${classes.rounded} ${classes.fluid}`}
    />
  );
}

Avatar.defaultProps = {
  alt: '',
};

Avatar.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
};