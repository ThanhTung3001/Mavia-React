import React from 'react'
import { Grid,Container,Card,CardMedia,CardContent,Typography,CardActions,Button,Divider,Avatar,Box,ListItemAvatar,ListItemText } 
from '@mui/material';
import { List, Menu, Castle, PanoramaPhotosphere, Man, ArrowForwardIos } from '@mui/icons-material';

 const ProductItems = ({mouseHandle,md,sm,lg,listItems}) => {
  
  return (
    <Grid container spacing={2} justifyContent={"center"}>
     {
       (listItems.map((e,index)=>(
        <Grid key={index} item xs={12} sm={sm} md={md} lg={lg} style={{
          display:'flex',
          justifyContent:'center'
        }}>
       <Button variant='text' style={{
         padding:'0'
       }} href={`/dashboard/products/${e.id}`}>
       <Card onMouseOver={(event)=>{mouseHandle(e); }}  >
          <CardMedia
            component="img"
            height="194"
            image={e.img}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="h5" >
            {e.title}
            </Typography>
            <Typography variant="body2" >
            {e.description}
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
              {e.action}
            </Typography>
         <Button startIcon={<PanoramaPhotosphere color='primary'/>} style={{color:'black'}}>
            {e.value}
         </Button>
          
        </Grid>
          </CardActions>
        </Card>
       </Button>
        </Grid>
       )))
     }
   
  
    </Grid>
  )
}
export default ProductItems;