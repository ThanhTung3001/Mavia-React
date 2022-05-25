import { faker } from '@faker-js/faker';
import { useState } from 'react';
// @mui
import { useTheme, createTheme } from '@mui/material/styles';
import { Grid, Container, Typography,Button } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
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
    avatar: 'https://image.thanhnien.vn/w2048/Uploaded/2022/lxwpcqjwp/2021_03_14/av-02_ayrt.jpeg'
  },
  {
    title: 'ACTIVE PLAYERS',
    unit: '4,0553',
    avatar: 'https://image.thanhnien.vn/w2048/Uploaded/2022/lxwpcqjwp/2021_03_14/av-02_ayrt.jpeg'
  },
  {
    title: 'ACTIVE PLAYERS',
    unit: '4,0554',
    avatar: 'https://image.thanhnien.vn/w2048/Uploaded/2022/lxwpcqjwp/2021_03_14/av-02_ayrt.jpeg'
  }, {
    title: 'ACTIVE PLAYERS',
    unit: '4,0554',
    avatar: 'https://image.thanhnien.vn/w2048/Uploaded/2022/lxwpcqjwp/2021_03_14/av-02_ayrt.jpeg'
  }
]
const ListTag = [
  {
    name: 'Last 24h'
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
  return (
    <Page title="Explore Categories">
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
          <Grid item xs={12} md={2} sm={7} container>
            <Typography variant="h5" sx={{ mb: 1 }}>
              Trending Player
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={1} justifyContent={"center"} >

          <Grid container item xs={12} sm={8} md={9} spacing={3} justifyContent={"center"}>

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
            <Grid item xs={12} sm={12} md={12} justifyContent={"space-between"} >
              <AppLiveMatch />
            </Grid>
            <Grid item xs={12} sm={12} md={12} justifyContent={"space-between"} >
              <Typography variant="h5" sx={{ mb: 1 }}>
                Past Matches
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} justifyContent={"space-between"} >
              <AppLiveMatch />
            </Grid>
              <Grid item xs={12} sm={12} md={12} justifyContent={"space-between"} >
              <Typography variant="h5" sx={{ mb: 1 }}>
               Top Bases
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} justifyContent={"space-between"} >
              <AppLiveMatch />
            </Grid>
          </Grid>

          <Grid item xs={12} md={3} sm={12} container>

            <Grid item xs={12} maxHeight={1000}>
              <AppTrending avatar={"https://image.thanhnien.vn/w2048/Uploaded/2022/lxwpcqjwp/2021_03_14/av-02_ayrt.jpeg"} username={"Username 123"} winsday={20} level={100} />
              <AppTrending avatar={"https://image.thanhnien.vn/w2048/Uploaded/2022/lxwpcqjwp/2021_03_14/av-02_ayrt.jpeg"} username={"Username 123"} winsday={20} level={100} />
              <AppTrending avatar={"https://image.thanhnien.vn/w2048/Uploaded/2022/lxwpcqjwp/2021_03_14/av-02_ayrt.jpeg"} username={"Username 123"} winsday={20} level={100} />
              <AppTrending avatar={"https://image.thanhnien.vn/w2048/Uploaded/2022/lxwpcqjwp/2021_03_14/av-02_ayrt.jpeg"} username={"Username 123"} winsday={20} level={100} />
              <AppTrending avatar={"https://image.thanhnien.vn/w2048/Uploaded/2022/lxwpcqjwp/2021_03_14/av-02_ayrt.jpeg"} username={"Username 123"} winsday={20} level={100} />
            <Grid xs={12}>
            <Button fullWidth  color='secondary' sx={{ m: 2 }} style={{
              color:'#343a40',
              background:'#6c757',
              height:'50px'
              
            }} variant="outlined">
                    All Players
                  </Button>
            </Grid>
            </Grid>
            <Grid item xs={12}  justifyContent={"space-between"} >
              <Typography variant="h5" sx={{ m: 1 }}>
              Trending Bases
              </Typography>
            </Grid>
            <Grid item xs={12} maxHeight={1000}>
              <AppTrending avatar={"https://image.thanhnien.vn/w2048/Uploaded/2022/lxwpcqjwp/2021_03_14/av-02_ayrt.jpeg"} username={"Username 123"} winsday={20} level={100} />
              <AppTrending avatar={"https://image.thanhnien.vn/w2048/Uploaded/2022/lxwpcqjwp/2021_03_14/av-02_ayrt.jpeg"} username={"Username 123"} winsday={20} level={100} />
              <AppTrending avatar={"https://image.thanhnien.vn/w2048/Uploaded/2022/lxwpcqjwp/2021_03_14/av-02_ayrt.jpeg"} username={"Username 123"} winsday={20} level={100} />
              <AppTrending avatar={"https://image.thanhnien.vn/w2048/Uploaded/2022/lxwpcqjwp/2021_03_14/av-02_ayrt.jpeg"} username={"Username 123"} winsday={20} level={100} />
              <AppTrending avatar={"https://image.thanhnien.vn/w2048/Uploaded/2022/lxwpcqjwp/2021_03_14/av-02_ayrt.jpeg"} username={"Username 123"} winsday={20} level={100} />
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

      </Container>
    </Page>
  );
}
