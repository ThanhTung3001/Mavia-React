import * as React from 'react';
import { List, Menu, Castle, PanoramaPhotosphere, Man, ArrowForwardIos } from '@mui/icons-material';
import { Grid, Container, Typography, Button, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ProductItems from './ProductItems';



export default function ProductTab() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const positionBase = [
    {
      id: 1,
      top: '300px',
      left: '270px'
    }, {
      id: 2,
      top: '461px',
      left: '190px'
    }, {
      id: 3,
      top: '163px',
      left: '550px'
    }, {
      id: 4,
      top: '580px',
      left: '350px'
    }
  ]
  const listItems = [{
    id: 1,
    img: '/static/mock-images/Bases/base1.png',
    title: 'Mega Fortress',
    description: 'HQ Level 4 .Plot #142',
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

  const [age, setAge] = React.useState('');
  const [item, setItem] = React.useState({});
  const [hover, setHover] = React.useState(false);
  const [pos, setPost] = React.useState({})
  const onHoverItem = (data) => {
    setItem(data);
    setHover(true);
    const position = positionBase.filter(e => e.id === data.id);
    if (position.length > 0) {
      setPost(position[0]);
    }

  }
  const CardHover = () => {
    return (
      <Grid container width="200px" height="70px"
        style={{
          borderRadius: '5px',
          backgroundColor: 'white',
          position: 'absolute',
          top: pos.top,
          left: pos.left
        }}>
        <Grid item xs={4} style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '3px'
        }}>
          <img src={item.img} id="img_hover" style={{
            borderRadius: '5px',
            height: '55px',
            width: '60px',
            objectFit: 'cover'
          }} alt="img hover" />
        </Grid>
        <Grid item xs={8} style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'start',
          padding: '3px 0px 3px 3px'
        }}>
          <Typography component='h5' variant='h7'>
            {item.title}
          </Typography>
          <Typography variant="body2" >
            {item.description}
          </Typography>
        </Grid>
      </Grid>
    )
  }
  return (
    <>
      <Grid container>
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
            <TabPanel value="1">Item Two</TabPanel>
            <TabPanel value="4">Item Two</TabPanel>
            <TabPanel value="3">
              <Grid container direction="row" spacing={3} justifyContent={"center"} >
                <Grid item xs={12} sm={12} md={12}>
                  <Grid container spacing={1} justifyContent={"center"} >
                    <Grid item xs={12} sm={6} md={3}>
                      <FormControl sx={{ m: 1, minWidth: 130, width: '100%' }} size="small">
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
                      <FormControl sx={{ m: 1, minWidth: 130, width: '100%' }} size="small">
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
                      <FormControl sx={{ m: 1, minWidth: 130, width: '100%' }} size="small">
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
                      <FormControl sx={{ m: 1, minWidth: 150, width: '100%' }} size="small">
                        <Button variant='contained' endIcon={<ArrowForwardIos />}>Collapse Map</Button>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6} marginLeft={0} mt={1} marginBottom={2} >
                      <Grid item xs={12} marginLeft={0} style={{ paddingLeft: '0px' }}>
                        <Typography component="h5" variant='h5' style={{ paddingLeft: '0px' }}>
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
                  <ProductItems listItems={listItems} sm={6} md={3} lg={2} mouseHandle={onHoverItem} />
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value="2">
              <Grid container spacing={3} justifyContent={"center"} >
                <Grid item xs={12} sm={12} md={5}>
                  <Grid container spacing={1} justifyContent={"center"} >
                    <Grid item xs={12} sm={12} md={6}>
                      <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={6}>
                          <FormControl sx={{ m: 1, minWidth: 130, width: '100%' }} size="small">
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
                        <Grid item xs={12} sm={12} md={12} lg={6}>
                          <FormControl sx={{ m: 1, minWidth: 130, width: '100%' }} size="small">
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
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={6}>
                          <FormControl sx={{ m: 1, minWidth: 130, width: '100%' }} size="small">
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
                        <Grid item xs={12} sm={12} md={12} lg={6}>

                          <FormControl sx={{ m: 1, minWidth: 150, width: '100%', marginLeft: '10px' }} size="small">
                            <Button variant='contained' endIcon={<ArrowForwardIos />}>Collapse Map</Button>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                     <Grid container>
                     <Grid item xs={12} sm={6} md={6} >
                        <Grid item xs={12} marginLeft={0} style={{ paddingLeft: '0px' }}>
                          <Typography component="h5" variant='h5' style={{ paddingLeft: '0px' }}>
                            Base For Sales
                          </Typography>
                          <Typography component="span" variant='body2'>
                            1543 Result
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sm={5} md={5}>
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
                    </Grid>
                  </Grid>
                  <ProductItems listItems={listItems} sm={6} md={6} lg={4} mouseHandle={onHoverItem} />
                </Grid>
                <Grid item xs={12} sm={12} md={7} style={{ position: 'relative' }} id="post_div">
                  {(hover === true) ? <CardHover /> : <>Nothing</>}
                  <img id='img_map'
                    style={{
                      borderRadius: '2%',
                      objectFit: 'cover'
                    }}

                    width='100%'
                    height='830px'
                    src='/static/mock-images/Matchs/map.jpg'
                    alt='Map Game'

                  />
                </Grid>
              </Grid>
            </TabPanel>

          </TabContext>
        </Box>
      </Grid>
    </>
  );
}
