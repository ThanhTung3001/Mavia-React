import * as React from 'react';
import { ListIcon, Menu, Castle, PanoramaPhotosphere, Man, ArrowForwardIos, Directions } from '@mui/icons-material';
import { Grid, Container, Typography, Button, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ProductItems  from './ProductItems';



export default function ProductTab() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [age, setAge] = React.useState('');

  return (
    <Grid container justifyContent={"center"}>
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab icon={<Menu />} iconPosition="start" label="Overview" value="1" />
            <Tab icon={<Castle />} iconPosition="start" label="Bases" value="2" />
            <Tab icon={<PanoramaPhotosphere />} iconPosition="start" label="Heros" value="3" />
            <Tab icon={<Man />} iconPosition="start" label="Status" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Grid container  direction="row" spacing={3}  justifyContent={"center"} >
            <Grid item xs={12} sm={12} md={5}>
              <Grid container spacing={1} justifyContent={"center"} >
                <Grid item xs={12} sm={6} md={3}>
                  <FormControl sx={{ m: 1, minWidth: 130,width:'100%' }} size="small">
                    <InputLabel id="demo-select-small">Sale Type</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={age}

                      label="Sale Type"
                      onChange={(event) => { setAge(event.target.value) }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <FormControl sx={{ m: 1, minWidth: 130,width:'100%' }} size="small">
                    <InputLabel id="demo-select-small">Price Range</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={age}
                      label="Price Range"
                      onChange={(event) => { setAge(event.target.value) }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <FormControl sx={{ m: 1, minWidth: 130,width:'100%' }} size="small">
                    <InputLabel id="demo-select-small">HQ Level</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={age}
                      label="HQ Level"
                      onChange={(event) => { setAge('') }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <FormControl sx={{ m: 1, minWidth: 150,width:'100%' }} size="small">
                    <Button variant='contained' endIcon={<ArrowForwardIos />}>Collapse Map</Button>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6} ml={1} mt={1} >
                  <Grid item xs={12}>
                    <Typography component="h5" variant='h5'>
                      Base For Sales
                    </Typography>
                    <Typography component="span" variant='body2'>
                      1543 Result
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={5} mt={1} >
                  <Grid item xs={12} sx={{ justifyContent: 'flex-end' }}>

                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                      <InputLabel id="demo-select-small">Sale Type</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={age}

                        label="Sale Type"
                        onChange={(event) => { setAge(event.target.value) }}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>

                  </Grid>
                </Grid>
              </Grid>
            <ProductItems/>
            </Grid>
            <Grid item xs={12} sm={12} md={7}>
            <img
            style={{
              borderRadius:'2%',
              objectFit:'cover'
            }}
            height='830px'
              src='/static/mock-images/Matchs/map.jpg'
             alt='Map Game'
               />  
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
    </Grid>
  );
}
