import React from 'react'
import { Grid,Container,Card,CardMedia,CardContent,Typography,CardActions,Button,Divider,Avatar,Box,ListItemAvatar,ListItemText } from '@mui/material';
import { ListIcon, Menu, Castle, PanoramaPhotosphere, Man, ArrowForwardIos } from '@mui/icons-material';

 const ProductItems = () => {
  return (
    <Grid container spacing={2} justifyContent={"center"}>
    <Grid item xs={12} sm={8} md={6}>
    <Card >
      <CardMedia
        component="img"
        height="194"
        image="/static/mock-images/Matchs/land.png"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5" >
          Mega Fortress
        </Typography>
        <Typography variant="body2" >
         HQ Level 4 .Plot #142
        </Typography>
      </CardContent>
      <Divider  />
      <CardActions disableSpacing>
    <Grid container justifyContent={"space-between"}>
    <Typography variant="h7"  style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }} >
          Auction
        </Typography>
     <Button startIcon={<PanoramaPhotosphere color='primary'/>} style={{color:'black'}}>
         3.100$
     </Button>
      
    </Grid>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} sm={8} md={6}>
    <Card >
      <CardMedia
        component="img"
        height="194"
        image="/static/mock-images/Matchs/land.png"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5" >
          Mega Fortress
        </Typography>
        <Typography variant="body2" >
         HQ Level 4 .Plot #142
        </Typography>
      </CardContent>
      <Divider  />
      <CardActions disableSpacing>
    <Grid container justifyContent={"space-between"}>
    <Typography variant="h7"  style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }} >
          Auction
        </Typography>
     <Button startIcon={<PanoramaPhotosphere color='primary'/>} style={{color:'black'}}>
         3.100$
     </Button>
      
    </Grid>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} sm={8} md={6}>
    <Card >
      <CardMedia
        component="img"
        height="194"
        image="/static/mock-images/Matchs/land.png"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5" >
          Mega Fortress
        </Typography>
        <Typography variant="body2" >
         HQ Level 4 .Plot #142
        </Typography>
      </CardContent>
      <Divider  />
      <CardActions disableSpacing>
    <Grid container justifyContent={"space-between"}>
    <Typography variant="h7" style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }} >
          Auction
        </Typography>
     <Button startIcon={<PanoramaPhotosphere color='primary'/>} style={{color:'black'}}>
         3.100$
     </Button>
      
    </Grid>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} sm={8} md={6}>
    <Card >
      <CardMedia
        component="img"
        height="194"
        image="/static/mock-images/Matchs/land.png"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5" >
          Mega Fortress
        </Typography>
        <Typography variant="body2" >
         HQ Level 4 .Plot #142
        </Typography>
      </CardContent>
      <Divider  />
      <CardActions disableSpacing>
    <Grid container justifyContent={"space-between"}>
    <Typography variant="h7"  style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }} >
          Auction
        </Typography>
     <Button startIcon={<PanoramaPhotosphere color='primary'/>} style={{color:'black'}}>
         3.100$
     </Button>
      
    </Grid>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
  )
}
export default ProductItems;