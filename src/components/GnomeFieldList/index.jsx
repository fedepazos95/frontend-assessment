/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import {
  List, ListItem, ListItemAvatar, Avatar, ListItemText,
} from '@material-ui/core';

export default function GnomeJobs({ title, list, icon }) {
  return (
    <List>
      <h3>{title}</h3>
      {
        list.length > 0
          ? list.map((job, key) => (
            <ListItem key={key}>
              <ListItemAvatar>
                <Avatar>
                  {icon}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={job}
              />
            </ListItem>
          ))
          : <div>{`This gnome has no ${title} :(`}</div>
      }
    </List>
  );
}

GnomeJobs.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.node,
};
