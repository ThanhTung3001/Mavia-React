import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { margin, padding } from '@mui/system';

export default function AppTrending({ avatar, username, winsday, level }) {
  return (
    <>
      <List xs={12}>
        <ListItem justifyContent={"center"} style={{ cursor: 'pointer', padding: '0' }} padding={0} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <>
                <Typography variant="h6" >
                  {username}
                </Typography>

              </>
            }
            secondary={
              <>
                <Typography

                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Level {level}<br />
                </Typography>
                <span>{winsday} Wins today</span>
              </>
            }
          />
        </ListItem>
        <Divider />

      </List>
    </>
  );

}
