import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CallMissed, Icecream, Inventory, PanoramaPhotosphere, Favorite, Share, Reply } from '@mui/icons-material';
import { useParams } from "react-router-dom"
import { Grid, Container, Button, Card, Modal, Backdrop, Fade, Typography, ListItemAvatar, ListItemText, ListItem, Box, CardActionArea, Avatar, Stack, Divider } from '@mui/material';
import CardHor from '../components/CardHor'
import { AppTrending } from '../sections/@dashboard/app'
import Page from '../components/Page';
import {ChartItems} from'../sections/@dashboard/products'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid gray',
  boxShadow: 24,
  borderRadius: '10px',
  p: 4,
};

const commonStyles = {
  bgcolor: 'background.paper',
  m: 1,
  border: 1
};
const ProductDetail = () => {
  const { productId } = useParams()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const getDate = () => {
    const date = new Date();

    return `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()} UTC`;
  }
  return (
    <Page title="Dashboard: Products" style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Grid container >
        <Grid item >
          <Grid container justifyContent={"start"} >
            <Typography variant='h3' component='h3' marginLeft={2}>
              View Base
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"} paddingTop={1}>

          <Grid item xs={11} sm={11} md={8}>
            <Grid container justifyContent={"center"}>
              <Grid xs={12}>

                <Grid container justifyContent={"center"}>
                  <img src="/static/mock-images/Bases/base1.png" width='95%' style={{ borderRadius: '5px', height: '600px', objectFit: 'cover' }} height='auto' alt="" />
                </Grid>

              </Grid>
              <Grid xs={11} padding="15px 0 15px 0">
                <Grid container justifyContent={"space-between"}>
                  <Grid xs={4}>
                    <Typography variant='h4' component='h4'>
                      Rail's Ice Base - HQ 4
                    </Typography>
                  </Grid>
                  <Grid xs={8} >
                    <Grid container justifyContent={"flex-end"}>
                      <Button variant='outlined' size="medium" style={{
                        color: '#000',

                      }} startIcon={<PanoramaPhotosphere color='primary' />}> Visit Base</Button>
                      <Button variant='outlined' style={{ marginLeft: '10px' }}>
                        <Favorite fontSize='small' style={{
                          color: '#000'
                        }} />
                      </Button>
                      <Button variant='outlined' style={{ marginLeft: '10px' }}>
                        <Reply fontSize='small' style={{
                          color: '#000'
                        }} />
                      </Button>
                      <Button variant='outlined' style={{ marginLeft: '10px' }}>
                        ...
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid xs={12}>
               
              <ChartItems/>

                
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={4} >
            <Box sx={{ ...commonStyles, borderColor: 'grey.300', borderRadius: 2 }}>
              <Grid container style={{ height: 'fit-content' }} justifyContent={"start"}>

                <Grid item xs={12} style={{ height: 'fit-content' }} padding="10px">
                  <Grid container justifyContent={"flex-start"}  >
                    <CardHor img="/static/mock-images/Bases/base1.png"
                      title={"Rail's Ice Base"} content={'HQ , Level'} width="100%" height="300px" />
                  </Grid>
                  <Divider />
                  <Grid item xs={12} style={{ height: 'fit-content' }}>
                    <Grid container paddingLeft={2} paddingTop={2} spacing={1} justifyContent={"space-between"}>
                      <Grid item xs={12} sm={6} md={6}  >
                        <Grid container style={{ flexDirection: 'row' }} justifyContent={'center'} alignItems={'center'}>
                          <Grid item xs={3}>
                            <Avatar alt="Remy Sharp" src="/static/mock-images/Bases/base1.png" />
                          </Grid>
                          <Grid item xs={9} style={{ flexDirection: 'column' }}>
                            <Typography variant='body2' component='h6' >
                              Owner
                            </Typography>
                            <Typography variant='h5' component='h6' >
                              RailsRoand
                            </Typography>
                          </Grid>
                        </Grid>

                      </Grid>
                      <Grid item xs={12} sm={6} md={6}  >
                        <Grid container style={{ flexDirection: 'row' }} justifyContent={'center'} alignItems={'center'}>
                          <Grid item xs={3}>
                            <Avatar alt="Remy Sharp" src="/static/mock-images/Bases/base1.png" />
                          </Grid>
                          <Grid item xs={9} style={{ flexDirection: 'column' }}>
                            <Typography variant='body2' component='h6' >
                              Owner
                            </Typography>
                            <Typography variant='h5' component='h6' >
                              RailsRoand
                            </Typography>
                          </Grid>
                        </Grid>


                      </Grid>

                    </Grid>
                  </Grid>
                  <Grid paddingTop={1} item xs={12} style={{ height: 'fit-content' }}>
                    <Typography variant='h7' component='body2'>Specs</Typography>
                    <Grid item xs={12}  >
                      <Grid container justifyContent={'space-between'}>
                        <Button style={{ margin: '10px', minWidth: '100px' }} startIcon={<CallMissed fontSize='small' />} variant='outlined'>Plot</Button>
                        <Button style={{ margin: '10px', minWidth: '100px' }} startIcon={<Icecream fontSize='small' />} variant='outlined'>Ice type</Button>
                        <Button style={{ margin: '10px', minWidth: '100px' }} startIcon={<Inventory fontSize='small' />} variant='outlined'>Common</Button>
                      </Grid>
                      <Grid item padding={1} >
                        <img src='/static/mock-images/Bases/base1.png' style={{
                          width: '100%',
                          height: '200px',
                          objectFit: 'cover',
                          borderRadius: '5px'
                        }} alt="img" />
                      </Grid>
                      <Divider />
                      <Grid item padding={1} >
                        <ListItem alignItems="center">
                          <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <>
                                <Typography variant='h7' component="span" marginRight={0.5}>
                                  Highest bid by
                                </Typography>

                                <Typography variant='h6' component="span">
                                  Andine731
                                </Typography>
                              </>}
                            secondary={
                              <>
                                <Typography
                                  sx={{ display: 'inline' }}
                                  component="span"
                                  variant="body2"
                                  color="text.primary"
                                >
                                  <Typography variant='h6' component="span">
                                    3,100.000 Mavia
                                  </Typography>
                                </Typography>
                                <Typography variant='h7' component="span" marginLeft={0.5}>
                                  {"$10,345.54"}
                                </Typography>
                              </>
                            }
                          />
                        </ListItem>

                      </Grid>
                      <Grid item>
                        <Button fullWidth size='medium' onClick={handleOpen} variant='contained'>Place bill</Button>
                      </Grid>
                      <Grid item paddingTop={2}>
                        <Typography variant='h7' component='body2'>
                          Aution ends in
                        </Typography>

                      </Grid>
                      <Grid item paddingTop={2} >
                        <Grid container justifyContent={'center'}>

                          <Grid item md={3}>
                            <Grid item md={12}>
                              <Grid container justifyContent={"center"}>
                                <Typography variant='p' fontSize={40} component='span' textAlign={"center"}>
                                  0
                                </Typography>
                              </Grid>
                            </Grid>
                            <Grid item md={12}>
                              <Grid container justifyContent={"center"}>
                                <Typography variant='h8' color={"gray"} fontSize={20} component='body2'>
                                  Days
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item md={3}>
                            <Grid item md={12}>
                              <Grid container justifyContent={"center"}>
                                <Typography variant='p' fontSize={40} component='span' textAlign={"center"}>
                                  15
                                </Typography>
                              </Grid>
                            </Grid>
                            <Grid item md={12}>
                              <Grid container justifyContent={"center"}>
                                <Typography variant='h8' fontSize={20} color={"gray"} component='body2'>
                                  Hours
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item md={3}>
                            <Grid item md={12}>
                              <Grid container justifyContent={"center"}>
                                <Typography variant='p' fontSize={40} component='span' textAlign={"center"}>
                                  5
                                </Typography>
                              </Grid>
                            </Grid>
                            <Grid item md={12}>
                              <Grid container justifyContent={"center"}>
                                <Typography variant='h8' fontSize={20} component='body2' color={"gray"}>
                                  Minutes
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item md={3}>
                            <Grid item md={12}>
                              <Grid container justifyContent={"center"}>
                                <Typography variant='p' fontSize={40} component='span' textAlign={"center"}>
                                  41
                                </Typography>
                              </Grid>
                            </Grid>
                            <Grid item md={12}>
                              <Grid container justifyContent={"center"}>
                                <Typography variant='h8' fontSize={20} color={"gray"} component='body2'>
                                  Second
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}

                            BackdropProps={{
                              timeout: 500,
                            }}
                          >
                            <Fade in={open}>
                              <Box sx={style} >
                                <Grid container>
                                  <Grid sm={12}>
                                    <Grid container justifyContent={"center"}>
                                      <img src="/static/mock-images/Bases/base1.png" width='95%' style={{ borderRadius: '5px', objectFit: 'cover' }} height='auto' alt="" />
                                    </Grid>
                                  </Grid>
                                  <Grid sm={12} padding="15px 0 15px 0">
                                    <Typography variant='h7' component='span'>
                                      Bill successfully placed on {<Typography variant='h6' component='span'> Rail's Ice Base</Typography>}
                                    </Typography>
                                  </Grid>
                                  <Grid sm={12}>
                                    <Grid container borderRadius={1} padding='0 10px 0 10px' justifyContent={"space-between"} style={{ backgroundColor: '#edeff1', lineHeight: '50px' }}>
                                      <Grid md={4}>
                                        <Typography variant='h7' component='span'>
                                          {"Your bid"}
                                        </Typography>
                                      </Grid>
                                      <Grid item md={8} style={{
                                        display: 'flex',
                                        justifyContent: 'end',
                                        alignItems: 'center'
                                      }}>
                                        <PanoramaPhotosphere fontSize='small' color='primary' />
                                        3,100.05
                                      </Grid>
                                    </Grid>
                                    <Divider />
                                    <Grid container borderRadius={1} padding='0 10px 0 10px' justifyContent={"space-between"} style={{ backgroundColor: '#edeff1', lineHeight: '50px' }}>
                                      <Grid md={5}>
                                        <Typography variant='h7' component='span'>
                                          {"Aution End date"}
                                        </Typography>
                                      </Grid>
                                      <Grid item md={7} style={{
                                        display: 'flex',
                                        justifyContent: 'end',
                                        alignItems: 'center'
                                      }}>
                                        {getDate()}


                                      </Grid>
                                    </Grid>
                                  </Grid>
                                  <Grid sm={12} paddingTop="15px">
                                    <Button fullWidth variant='contained'>Continue</Button>
                                  </Grid>

                                </Grid>
                              </Box>
                            </Fade>
                          </Modal>

                        </Grid>
                      </Grid>

                    </Grid>
                  </Grid>

                </Grid>

              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>


    </Page>

  )
}
export default ProductDetail;