import React from 'react'
import {CallMissed,Icecream,Inventory} from '@mui/icons-material';
import { useParams } from "react-router-dom"
import { Grid, Container,Button, Card, Typography, CardActionArea, Avatar, Stack, Divider } from '@mui/material';
import CardHor from '../components/CardHor'
import { AppTrending } from '../sections/@dashboard/app'
import Page from '../components/Page';

const ProductDetail = () => {
  const { productId } = useParams()

  return (
    <Page title="Dashboard: Products" style={{
      display:'flex',
      justifyContent:'center'
    }}>
   <Grid container justifyContent={"center"}>
      <Grid item xs={12} sm={12} md={9}>
        <Grid container justifyContent={"center"}>
          <Grid xs={12}>
          <Grid container justifyContent={"center"}>
            <img src="/static/mock-images/Bases/base1.png" width='900px' style={{ borderRadius: '5px' }} height='auto' alt="" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} paddingTop={5} sm={12} md={3}>
        <Grid container style={{ height: 'fit-content' }} justifyContent={"center"}> 
          <Grid item xs={12} style={{ height: 'fit-content' }}>
           <Grid container  >
           <CardHor img="/static/mock-images/Bases/base1.png" title={"Rail's Ice Base"} content={'HQ , Level'} width="300px" height="300px" />
           </Grid>
            <Divider />
            <Grid item xs={12} style={{ height: 'fit-content' }}>
              <Stack direction="row" paddingTop={2} spacing={1} justifyContent={"space-between"}>
                <Grid item xs={12}  md={6}  >
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
                <Grid item xs={12} md={6}  >
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
             
              </Stack>
            </Grid>
            <Grid paddingTop={1} item xs={12} style={{ height: 'fit-content' }}>
              <Typography variant='h7' component='body2'>Specs</Typography>
              <Grid item xs={12}  >
            <Grid container justifyContent={'space-between'}>
               <Button style={{margin:'10px',minWidth:'100px'}} startIcon={<CallMissed/>} variant='text'>Plot</Button>
               <Button style={{margin:'10px',minWidth:'100px'}} startIcon={<Icecream/>} variant='text'>Ice type</Button>
               <Button style={{margin:'10px',minWidth:'100px'}} startIcon={<Inventory/>} variant='text'>Common</Button>
            </Grid>
                
               
                </Grid>
             </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </Page>
    
  )
}
export default ProductDetail;