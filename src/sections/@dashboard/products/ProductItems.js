import React, { useState } from 'react'
import { Grid,Container,Card,CardMedia,CardContent,Typography
  ,CardActions,
  Button,
  Divider,
  Avatar,
  Box,ListItemAvatar,ListItemText,ClickAwayListener,ListItem, Stack 
 } 
from '@mui/material';
import { List, Menu, Castle, PanoramaPhotosphere, Man, ArrowForwardIos } from '@mui/icons-material';
import { Link,Redirect  } from 'react-router-dom';
import { ListerningMore } from './ListerningMore';

const styles = {
  position: 'absolute',
  top: 28,
  right: 0,
  left: 0,
  zIndex: 1,
  border: '1px solid',
  p: 1,
  bgcolor: 'background.paper',
};
const styleForMore={
  position:'absolute',
  top:2,
  right:2,
  zIndex:1000
}
const styleForStack={
  backgroundColor:'while'
}
 const ProductItems = ({mouseHandle,md,sm,lg,listItems,mode=false}) => {
  const [open,setOpen]=useState(false);
  
  const handleClickAway=()=>{
    setOpen(false);
  }
  const handleClick=()=>{
    setOpen((prev) => !prev);
    // alert('open modal')
  }
  return (
    <Grid container spacing={2} justifyContent={"center"}>
     {
       (listItems.map((e,index)=>(
        <Grid key={index} item xs={12} sm={sm} md={md} lg={lg} style={{
          display:'flex',
          justifyContent:'center'
        }}>
       
       <Card className='card_item' onMouseOver={(event)=>{mouseHandle(e); }}  >
          <CardMedia
            component="img"
             style={{
               backgroundColor:'#d3d3d6',
               width:'100%'
             }}
            height="194"
            image={e.img}
            
            alt="Paella dish"
          />
          {mode?(<ListerningMore/>):null}
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
       
        </Grid>
       )))
     }
   
  
    </Grid>
  )
}
export default ProductItems;