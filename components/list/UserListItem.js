import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

export function UserListItem(props) {
    const { picture, first_name, last_name, username } = props.user || {};

    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={`pictures/${picture}`} />
            </ListItemAvatar>
            <ListItemText
                primary={`${first_name} ${last_name}`}
                secondary={`@${username}`}
            />
        </ListItem>
    );
}