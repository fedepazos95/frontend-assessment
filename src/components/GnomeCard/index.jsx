import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardHeader from 'components/Card/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import styles from './gnomeCardStyle';

const useStyles = makeStyles(styles);

export default function GnomeCard({
  headerColor, data, title,
}) {
  const classes = useStyles();
  const cardTitle = classNames({
    [classes.cardTitle]: true,
  });
  return (
    <Card>
      <CardHeader color={headerColor}>
        {title !== undefined ? <div className={cardTitle}>{title}</div> : null}
      </CardHeader>
      <CardBody>
        {data.content}
      </CardBody>
    </Card>
  );
}

GnomeCard.propTypes = {
  headerColor: PropTypes.oneOf([
    'primary',
  ]),
  title: PropTypes.string,
  data: PropTypes.shape({
    content: PropTypes.object.isRequired,
  }),
};
