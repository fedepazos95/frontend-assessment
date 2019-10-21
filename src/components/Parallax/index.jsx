import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material-UI Core Components
import { makeStyles } from '@material-ui/core/styles';
// Style
import styles from './parallaxStyle';

const useStyles = makeStyles(styles);

export default function Parallax({
  children, image,
}) {
  let windowScrollTop;
  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3;
  } else {
    windowScrollTop = 0;
  }
  const [transform, setTransform] = React.useState(
    `translate3d(0,${windowScrollTop}px,0)`,
  );
  const resetTransform = () => {
    windowScrollTop = window.pageYOffset / 3;
    setTransform(`translate3d(0,${windowScrollTop}px,0)`);
  };
  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener('scroll', resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener('scroll', resetTransform);
      }
    };
  });

  const classes = useStyles();
  const parallaxClasses = classNames({
    [classes.parallax]: true,
  });
  return (
    <div
      className={parallaxClasses}
      style={{
        backgroundImage: `url("${image}")`,
        transform,
      }}
    >
      {children}
    </div>
  );
}

Parallax.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
};
