import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import styles from './avatarStyle';

const useStyles = makeStyles(styles);

export default function Avatar({ image, alt }) {
  const classes = useStyles();

  return (
    <img
      src={image}
      alt={alt}
      className={`${classes.rounded} ${classes.fluid}`}
    />
  );
}

Avatar.defaultProps = {
  alt: '',
};

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
