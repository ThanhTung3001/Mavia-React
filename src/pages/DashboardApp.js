import { faker } from '@faker-js/faker';
import { useState } from 'react';
// @mui
import { useTheme, createTheme } from '@mui/material/styles';
import {
  List,PropaneTank,CenterFocusStrong,Support,Gamepad,
  FavoriteBorder, Menu,NoBackpack,Policy, Castle,Hearing,Visibility, Favorite,SportsEsports,AccountTree,KeyboardDoubleArrowDown,
  PanoramaPhotosphere, Man, ArrowForwardIos,HealthAndSafety ,AccountCircle,Diamond,Article,LibraryBooks ,NotificationsActive,Settings
 } from '@mui/icons-material';
import { Grid, Container, Typography, Button, InputLabel, MenuItem, FormControl, Select, FormGroup, FormControlLabel, FormLabel, Checkbox } from '@mui/material';
// components


import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import User from './User';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
  AppTrending,
  AppTab,
  AppLiveMatch
} from '../sections/@dashboard/app';



// ----------------------------------------------------------------------
const ListItems = [
  {
    title: 'ACTIVE PLAYERS',
    unit: '4,0554',
    avatar: '/static/mock-images/avatars/avatar_1.jpg'
  },
  {
    title: 'TOTAL MATCHES',
    unit: '102,022',
    avatar: '/static/mock-images/avatars/avatar_9.jpg'
  },
  {
    title: 'TOTAL SHAPPHIRE ',
    unit: '411,0554',
    avatar: '/static/mock-images/avatars/avatar_2.jpg'
  }, {
    title: 'SHAPPHIRE SPENDING ',
    unit: '554,0554',
    avatar: '/static/mock-images/avatars/avatar_3.jpg'
  }
]
const randomMatchs =(index)=>{
    const randomMap = (Math.round(Math.random()*4)+1);
    const randomAvatar = Math.round(Math.random()*40)+1;
    const randomAvatar2= Math.round(Math.random()*40)+1;
    const randomName = Math.round(Math.random()*30)+1;
  return {
      user1:`User ${index+1}`,
      user2:`User ${randomName}`,
      img1:`/static/mock-images/avatars/avatar_${randomAvatar}.jpg`,
      img2:`/static/mock-images/avatars/avatar_${randomAvatar2}.jpg`,
      map:`/static/mock-images/Bases/map${randomMap>=5?4:randomMap}.jpg`,
      matchName:`Match ${index+1}`
  }
}
const Matches = [...Array(8)].map((_,index)=>{
  return randomMatchs(index);
})
const ListTag = [
  {
    name: 'Last 24h',
  }, {
    name: ' 7 Days'
  }, {
    name: ' 30 Days'
  }
  , {
    name: ' All time'
  }
]
export default function DashboardApp() {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });
  const [valueTag, setValueTag] = useState(0);
  const handleChangeValueTag = (event, newValue) => {
    setValueTag(newValue);
  }
  const[value,setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleMourse=()=>{

  }
  return (
    <Page title="Explore Categories">
        <Grid sm={12}>
             <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab icon={<SportsEsports />} iconPosition="start" label="All Battles" value="1" />
                <Tab icon={<AccountCircle />} iconPosition="start" label="All Users" value="2" />
                <Tab icon={<AccountTree />} iconPosition="start" label="All bases" value="3" />
                <Tab icon={<PanoramaPhotosphere />} iconPosition="start" label="All Heros" value="4" />
                <Tab icon={<KeyboardDoubleArrowDown />} iconPosition="start" label="All Status" value="5" />
                
              </TabList>
            </Box>
            <TabPanel value="1">

            <Container maxWidth="xl">
                <Typography variant="h3" sx={{ mb: 5 }}>
                  Explore
                </Typography>

                <Grid container spacing={1} justifyContent={"space-between"} >
                  <Grid item xs={12} sm={5} md={8}>
                    <Typography variant="h5" sx={{ mb: 1 }}>
                      Explore Categories
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={2} sm={6} container>
                    <Typography variant="h5" sx={{ mb: 1 }}>
                      Trending Player
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={1} justifyContent={"center"} >

                  <Grid container item xs={12} sm={8} md={10} spacing={3} justifyContent={"center"}>

                    <Grid item xs={12} sm={6} md={2.3}>
                      <AppWidgetSummary title="All Battles" total={714000} icon={'arcticons:battleforwesnoth'} />
                    </Grid>

                    <Grid item xs={12} sm={6} md={2.3}>
                      <AppWidgetSummary title="All Players" total={1352831} icon={'icon-park-outline:game-three'} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={2.3}>
                      <AppWidgetSummary title="All Bases" total={234} icon={'ic:outline-castle'} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={2.3}>
                      <AppWidgetSummary title="All Heroes" total={1723315} icon={'arcticons:typinghero'} />
                    </Grid>

                    <Grid item xs={12} sm={6} md={2.3}>
                      <AppWidgetSummary title="All Status" total={234} icon={'carbon:person'} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} justifyContent={"space-between"} >
                      <AppTab handleChange={handleChangeValueTag} ListItems={ListItems} ListTag={ListTag} index={valueTag} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} justifyContent={"space-between"} >
                      <Typography variant="h5" sx={{ mb: 1 }}>
                        Live Matches
                      </Typography>
                    </Grid>
                    {/* LiveMatches */}
                    <Grid item xs={12}>
                      <Grid container justifyContent={"center"}>
                        {
                          Matches.map(e=>{
                            return (
                            <Grid item xs={12} sm={6} md={3} paddingBottom={5}  >
                            <AppLiveMatch data={e} />
                            </Grid>
                            )
                          })
                        }
                      </Grid>
                    </Grid>
                   
                      {/* Past Matches */}
                    <Grid item xs={12} sm={12} md={12} justifyContent={"center"} >
                      <Typography variant="h5" sx={{ mb: 1 }}>
                        Past Matches
                      </Typography>
                      <Grid item xs={12}>
                      <Grid container justifyContent={"center"}>
                        {
                          Matches.map(e=>{
                            return (
                            <Grid item xs={12} sm={6} md={3} paddingBottom={5}  >
                            <AppLiveMatch data={e} />
                            </Grid>
                            )
                          })
                        }
                      </Grid>
                    </Grid>
                    </Grid>
           
                      <Grid item xs={12} sm={12} md={12} justifyContent={"space-between"} >
                      <Typography variant="h5" sx={{ mb: 1 }}>
                      Top Bases
                      </Typography>
                      <Grid item xs={12}>
                      <Grid container justifyContent={"center"}>
                        {
                          Matches.map(e=>{
                            return (
                            <Grid item xs={12} sm={6} md={3} paddingBottom={5}  >
                            <AppLiveMatch data={e} />
                            </Grid>
                            )
                          })
                        }
                      </Grid>
                    </Grid>
                    </Grid>
                    
                  </Grid>

                  <Grid item xs={12} md={2} sm={12} container>

                    <Grid item xs={12} maxHeight={1000}>
                      {
                        Matches.map((e,index)=>(
                          <AppTrending avatar={e.img1} username={e.user1} winsday={Math.round(Math.random()*index)+1} level={Math.round(Math.random()*100)+1} />
                        ))
                      }
                     
                      
                    <Grid xs={12}>
                    <Button fullWidth  color='secondary' sx={{ m: 2 }} style={{
                      color:'#343a40',
                      background:'#6c757',
                      height:'50px'
                      
                    }} variant="outlined">
                            All Players
                          </Button>
                    </Grid>
                    <Grid item xs={12} >
                       <Typography variant="h5" sx={{ mt:1 }}>
                      Trending Bases
                      </Typography>
                      {
                         Matches.map((e,index)=>(
                          <AppTrending avatar={e.img1} username={e.user2} winsday={Math.round(Math.random()*index)+1} level={Math.round(Math.random()*100)+1} />
                        ))
                      }
                      <Button fullWidth  color='secondary' sx={{ m: 2 }} style={{
                      color:'#343a40',
                      background:'#6c757',
                      height:'50px'
                      
                    }} variant="outlined">
                            All Bases
                          </Button>
                    </Grid>
                    </Grid>
                   
                   
                  </Grid>
                </Grid>

              </Container>
            </TabPanel>
            <TabPanel value="2">
              <User/>
            </TabPanel>
             <TabPanel value='3'>
                 Items 3
              </TabPanel>
             
             </TabContext>
             </Box>
             </Grid>
      
    </Page>
  );
}
