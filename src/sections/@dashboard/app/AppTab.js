import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Container,Grid } from '@mui/material';

 function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function AppTab({ListItems,index,handleChange,ListTag}) {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={index} onChange={handleChange} aria-label="basic tabs example">
          {ListTag.map((e,index)=>(
                  <Tab label={e.name} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {ListTag.map((e,index)=>(
      <TabPanel value={value} index={index}>       
      <Container>
         <Grid container>
             {ListItems.map(e=>(
                  <Grid item xs={12} sm={6} md={3}>
                  <ListItem style={{cursor:'pointer' ,padding:'0'}} padding={0} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={e.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <>
                   <Typography variant="h7" >
                          {e.title}
                      </Typography>
         
                </>
              }
              secondary={
                <>
                  <Typography
                   
                   variant="h7"
                  >
                   {e.unit}
                  </Typography>
               
                </>
              }
            />
          </ListItem>
          </Grid>
             ))}
       
         </Grid>
          
      </Container>
          
      </TabPanel>       
          ))}
     
      
     
    </Box>
  );
}
