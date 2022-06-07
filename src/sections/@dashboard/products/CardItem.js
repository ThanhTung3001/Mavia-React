import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { padding } from '@mui/system';

const commonStyles = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
    position:'relative'
    
  };
const CardItem = ({id,img,title,level,handleCheck}) => {
    // alert(img)
    const [heros,setHeros]= useState({});
    const checkHandle =(event)=>{
        if(event.target.checked){
           const data ={
           id,img,level,title
           }
           setHeros(data)
           handleCheck(prev=>[...prev,data])
        }else{
            handleCheck(prev=>{
              const dataReturn = prev.filter(e=>e.id!==id);
              return dataReturn;
            })
            setHeros({});
        }
    }
    const getCheckItems =()=>{

       handleCheck(prev=>[...prev,heros])
    }
  return (
    <Card sx={{ maxWidth: 345 ,height:160,...commonStyles, borderColor:'primary.main'}}>
      <CardMedia
        component="img"
        height="90px"
        image={img}
        sx={{backgroundColor:'#d3d3d6',}}
        alt="green iguana"
      />
      <Checkbox style={{
          position:'absolute',
          top:'4px',
          right:'4px'
      }} defaultChecked={false} onChange={checkHandle} size="medium" />
      <CardContent sx={{padding:'16px ', margin:'0px'}}>
        <Typography sx={{margin:'0px'}} gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{margin:'0px'}}>
          {level}
        </Typography>
      </CardContent>
     
    </Card>
  )
}



export default CardItem