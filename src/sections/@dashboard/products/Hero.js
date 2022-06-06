import * as React from 'react';
import { List, PropaneTank, CenterFocusStrong, Support, Gamepad, FavoriteBorder, Menu, NoBackpack, Policy, Castle, Hearing, Visibility, PanoramaPhotosphere, Man, ArrowForwardIos, HealthAndSafety } from '@mui/icons-material';
import { Grid, Container, Radio, RadioGroup, Typography, Button, InputLabel, MenuItem, FormControl, Select, FormGroup, FormControlLabel, FormLabel, Checkbox } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ProductItems from './ProductItems';

const listHero = [
  {
    id: 1,
    img: '/static/mock-images/Hero/Hero1.png',
    title: 'Mega Fortress',
    description: 'HQ Level 4 .Plot #142',
    action: 'Auction',
    value: '3,100.00'
  }, {
    id: 2,
    img: '/static/mock-images/Hero/Hero2.png',
    title: 'Mega Fortress',
    description: 'HQ Level 4 .Plot #645',
    action: 'Buy it now',
    value: '1,298.50'
  }, {
    id: 3,
    img: '/static/mock-images/Hero/Hero3.png',
    title: 'Mega Fortress',
    description: 'HQ Level 8 .Plot #1983',
    action: 'Buy it now',
    value: '6,500.50'
  }, {
    id: 4,
    img: '/static/mock-images/Hero/Hero4.png',
    title: 'Mega Fortress',
    description: 'HQ Level 2 .Plot #1004',
    action: 'Buy it now',
    value: '2,500.50'
  }
]
const Hero = () => {
  const [age, setAge] = React.useState('');
  const [item, setItem] = React.useState({});
  const [hover, setHover] = React.useState(false);
  const [pos, setPost] = React.useState({})

  return (
    <Grid container direction="row" spacing={3} justifyContent={"center"} >
      <Grid item xs={12} sm={12} md={12} lg={12} xl={2}>
        <Grid container spacing={1} justifyContent={"center"} >
          <Grid item xs={12} md={12}>
            <FormControl>

              <Typography component="h4" variant='h4' color='primary'>Game</Typography>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel value="female" control={<Radio />} label="Origin" />
                <FormControlLabel value="male" control={<Radio />} label="Classic" />

              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={12}>
            <Grid container direction={"column-reverse"}>
              <Grid item xs={12} md={12}  >
                <Grid item xs={12} marginLeft={0} style={{ paddingLeft: '0px' }}>
                  <Typography component="h5" variant='h5' style={{ paddingLeft: '0px' }}>
                    Hero For Sales
                  </Typography>
                  <Typography component="span" variant='body2'>
                    1543 Result
                  </Typography>
                </Grid>
              </Grid>

            </Grid>
          </Grid>
          <Grid item xs={12} >
            <FormControl sx={{ m: 1, minWidth: 150, width: '100%' }} size="small">
              <Button variant='contained' >Filter </Button>
            </FormControl>
          </Grid>
          <Grid item xs={12}
          >
            <FormControl component="fieldset" fullWidth style={{ marginTop: '10px' }}>
              <FormLabel component="legend"><Typography component="h4" variant='h4' color='primary'>Parts</Typography></FormLabel>
              <FormGroup aria-label="position" row>
                <Grid item xs={4} sm={3} md={3} lg={4} xl={6}>
                  <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label={
                      <Box component="div" fontSize={20}>

                        <HealthAndSafety fontSize="medium" color='primary' />
                        Hands

                      </Box>
                    }
                    labelPlacement="end" />
                </Grid>
                <Grid item xs={4} sm={3} md={3} lg={4} xl={6}>
                  <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label={
                      <Box component="div" fontSize={20}>
                        <Hearing fontSize="medium" color='primary' />
                        Ears
                      </Box>
                    }
                    labelPlacement="end" />
                </Grid>
                <Grid item xs={4} sm={3} md={3} lg={4} xl={6}>
                  <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label={
                      <Box component="div" fontSize={20}>
                        <Visibility fontSize="medium" color='primary' />
                        Eyes
                      </Box>
                    }
                    labelPlacement="end" />
                </Grid>
                <Grid item xs={4} sm={3} md={3} lg={4} xl={6}>
                  <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label={
                      <Box component="div" fontSize={20}>
                        <NoBackpack fontSize="medium" color='primary' />
                        Back
                      </Box>
                    }
                    labelPlacement="end" />
                </Grid>
                <Grid item xs={4} sm={3} md={3} lg={4} xl={6}>
                  <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label={
                      <Box component="div" fontSize={20}>
                        <Policy fontSize="medium" color='primary' />
                        Legs
                      </Box>
                    }
                    labelPlacement="end" />
                </Grid>
                {/* ears, eyes, back, legs, hands */}
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} >
            <FormControl component="fieldset" fullWidth style={{ marginTop: '10px' }}>
              <FormLabel component="legend"><Typography component="h4" variant='h4' color='primary'>Class</Typography></FormLabel>
              <FormGroup aria-label="position" row>
                <Grid item xs={4} sm={3} md={3} lg={4} xl={6}>
                  <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label={
                      <Box component="div" fontSize={20}>
                        <CenterFocusStrong fontSize="medium" color='primary' />
                        DMG DPS
                      </Box>
                    }
                    // PropaneTank,Support,Gamepad,FavoriteBorder
                    labelPlacement="end" />
                </Grid>
                <Grid item xs={4} sm={3} md={3} lg={4} xl={6}>
                  <FormControlLabel
                    value="end"

                    control={<Checkbox />}
                    label={
                      <Box component="div" fontSize={20}>
                        <PropaneTank fontSize="medium" color='primary' />
                        Tanker
                      </Box>
                    }
                    labelPlacement="end" />
                </Grid>
                <Grid item xs={4} sm={3} md={3} lg={4} xl={6}>
                  <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label={
                      <Box component="div" fontSize={20}>
                        <Support fontSize="medium" color='primary' />
                        Support
                      </Box>
                    }
                    labelPlacement="end" />
                </Grid>
                <Grid item xs={4} sm={3} md={3} lg={4} xl={6}>
                  <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label={
                      <Box component="div" fontSize={20}>
                        <Gamepad fontSize="medium" color='primary' />
                        Controller
                      </Box>
                    }
                    labelPlacement="end" />
                </Grid>
                <Grid item xs={4} sm={3} md={3} lg={4} xl={6}>
                  <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label={
                      <Box component="div" fontSize={20}>
                        <FavoriteBorder fontSize="medium" color='primary' />
                        Healder
                      </Box>
                    }
                    labelPlacement="end" />
                </Grid>
              </FormGroup>

            </FormControl>
          </Grid>
          <Grid item xs={12} >
            <FormControl component="fieldset" fullWidth style={{ marginTop: '10px' }}>
              <FormLabel component="legend"><Typography component="h4" variant='h4' color='primary'>Rarity </Typography></FormLabel>
              <FormGroup aria-label="position" row>
                <Grid item xs={4} sm={3} md={3} lg={4} xl={6}>
                  <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label={
                      <Box component="div" fontSize={20}>
                        Common
                      </Box>
                    }
                    labelPlacement="end" />
                </Grid>
                <Grid item xs={4} sm={3} md={3} lg={4} xl={6}>
                  <FormControlLabel
                    value="end"

                    control={<Checkbox />}
                    label={
                      <Box component="div" fontSize={20}>
                        Epic
                      </Box>
                    }
                    labelPlacement="end" />
                </Grid>
                <Grid item xs={4} sm={3} md={3} lg={4} xl={6}>
                  <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label={
                      <Box component="div" fontSize={20}>
                        Mythical
                      </Box>
                    }
                    labelPlacement="end" />
                </Grid>
                <Grid item xs={4} sm={3} md={3} lg={4} xl={6}>
                  <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label={
                      <Box component="div" fontSize={20}>
                        Legendary
                      </Box>
                    }
                    labelPlacement="end" />
                </Grid>

              </FormGroup>

            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={10}>
        <ProductItems listItems={listHero} sm={6} md={3} lg={3} />
      </Grid>
    </Grid>

  )
}

export default Hero