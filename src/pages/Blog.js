import { Link as RouterLink } from 'react-router-dom';
// material
import {useState }from 'react'
import {
   List,PropaneTank,CenterFocusStrong,Support,Gamepad,
   FavoriteBorder, Menu,NoBackpack,Policy, Castle,Hearing,Visibility, Favorite,
   PanoramaPhotosphere, Man, ArrowForwardIos,HealthAndSafety ,AccountCircle,Diamond,Article,LibraryBooks ,NotificationsActive,Settings
  } from '@mui/icons-material';
import { Grid, Container, Typography, Button, InputLabel, MenuItem, FormControl, Select, FormGroup, FormControlLabel, FormLabel, Checkbox } from '@mui/material';
// components


import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import {ProductItems} from '../sections/@dashboard/products';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const bases = [{
  id: 1,
  img: '/static/mock-images/Bases/base1.png',
  title: 'Mega Fortress',
  description: 'HQ Level 4 .Plrt #142',
  action: 'Auction',
  value: '3,100.00'
}, {
  id: 2,
  img: '/static/mock-images/Bases/base4.png',
  title: 'Mega Fortress',
  description: 'HQ Level 4 .Plot #645',
  action: 'Buy it now',
  value: '1,298.50'
}, {
  id: 3,
  img: '/static/mock-images/Bases/base2.png',
  title: 'Mega Fortress',
  description: 'HQ Level 8 .Plot #1983',
  action: 'Buy it now',
  value: '6,500.50'
}, {
  id: 4,
  img: '/static/mock-images/Bases/base3.png',
  title: 'Mega Fortress',
  description: 'HQ Level 2 .Plot #1004',
  action: 'Buy it now',
  value: '2,500.50'
}];
const heros = [
  {
    id: 1,
    img: '/static/mock-images/Char/Layer 3 Large.png',
    title: 'Mega Fortress',
    description: 'HQ Level 4 .Plot #142',
    action: 'Auction',
    value: '3,100.00'
  }, {
    id: 2,
    img: '/static/mock-images/Char/Layer 11 Large.png',
    title: 'Mega Fortress',
    description: 'HQ Level 4 .Plot #645',
    action: 'Buy it now',
    value: '1,298.50'
  }, {
    id: 3,
    img: '/static/mock-images/Char/Layer 15 Large.png',
    title: 'Mega Fortress',
    description: 'HQ Level 8 .Plot #1983',
    action: 'Buy it now',
    value: '6,500.50'
  }, {
    id: 4,
    img: '/static/mock-images/Char/Layer 19 Large.png',
    title: 'Mega Fortress',
    description: 'HQ Level 2 .Plot #1004',
    action: 'Buy it now',
    value: '2,500.50'
  }, {
    id: 5,
    img: '/static/mock-images/Char/Layer 34 Large.png',
    title: 'Mega Fortress',
    description: 'HQ Level 2 .Plot #1004',
    action: 'Buy it now',
  }
]

export default function Blog() {
  const[value,setValue] = useState("3");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleMourse=()=>{

  }
  const mode=true;

  return (
    <Page title="Dashboard: My account">
          <Grid sm={12}>
             <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab icon={<AccountCircle />} iconPosition="start" label="Profile" value="1" />
                <Tab icon={<Diamond />} iconPosition="start" label="Ruby" value="2" />
                <Tab icon={<Article />} iconPosition="start" label="Properties" value="3" />
                <Tab icon={<LibraryBooks />} iconPosition="start" label="Ledger" value="4" />
                <Tab icon={<NotificationsActive />} iconPosition="start" label="Notification" value="5" />
                <Tab icon={<Favorite />} iconPosition="start" label="Favorites" value="6" />
                <Tab icon={<Settings />} iconPosition="start" label="Setting" value="7" />
              </TabList>
            </Box>
            <TabPanel value="1">Item Two</TabPanel>
            <TabPanel value="4">Item Two</TabPanel>
             <TabPanel value='3'>
             <Container>
                      <Typography variant='h4' component='h4'>
                        Owned Bases
                      </Typography>
                      <Typography variant='h7' component='h7'>
                        4 result
                      </Typography>
                      <Grid sm={12}>
                        <Grid container>
                          <ProductItems mode={mode} mouseHandle={handleMourse} md={3} sm={4} lg={2.4} listItems={bases}  />
                        </Grid>
                      </Grid>
                      <Typography variant='h4' component='h4'>
                        Owned Heros
                      </Typography>
                      <Typography variant='h7' component='h7'>
                        4 result
                      </Typography>
                      <Grid sm={12}>
                        <Grid container>
                          <ProductItems mode={mode} mouseHandle={handleMourse} md={3} sm={4} lg={2.4} listItems={heros}  />
                        </Grid>
                      </Grid>
                </Container>
             </TabPanel>
             </TabContext>
             </Box>
             </Grid>
           
    </Page>
  );
}
