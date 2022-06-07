import React, { useState } from 'react'
import {
    Box,
    Stack,
    Button,
    ClickAwayListener,
    Typography,
    CardActions,
    Card,
    CardContent,
    CardMedia,
    Modal,
    TextField,
    InputLabel,
    Grid ,
    FormControl,
    Select,
    MenuItem,
    Divider
} from'@mui/material'

import { TextFields,Add } from '@mui/icons-material';
import CardItem from './CardItem';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    bgcolor: 'background.paper',
    pt: 2,
    px: 4,
    pb: 3,
    borderRadius:'5px'
  };
const styles={
  position:'absolute',
  top:0,
  right:0
}
const styleButton={
    color:'black',
    backgroundColor:'##F9FAFB'
}

const listHero = [
    {
      id: 1,
      img: '/static/mock-images/Hero/Hero1.png',
      title: 'Hero 1',
      description: 'HQ Level 4 .Plot #142',
      level:'Level 4',
      action: 'Auction',
      value: '3,100.00'
    }, {
      id: 2,
      img: '/static/mock-images/Hero/Hero2.png',
      title: 'Hero 2',
      description: 'HQ Level 4 .Plot #645',
      level:'Level 4',
      action: 'Buy it now',
      value: '1,298.50'
    }, {
      id: 3,
      img: '/static/mock-images/Hero/Hero3.png',
      title: 'Hero 3',
      description: 'HQ Level 8 .Plot #1983',
      level:'Level 8',
      action: 'Buy it now',
      value: '6,500.50'
    }, {
      id: 4,
      img: '/static/mock-images/Hero/Hero4.png',
      title: 'Hero 4',
      description: 'HQ Level 2 .Plot #1004',
      level:'Level 2',
      action: 'Buy it now',
      value: '2,500.50'
    }
  ]

const ChildModal=()=>{
    const [open,setOpen]= useState(true);
    
    const handleClick=()=>{
        setOpen(prev=>!prev);
       
    }
    const [heros,setHeros] =useState([]);
    const handleChooses =()=>{
        console.log(heros)
    }

    return(
        <Modal open={open} onClose={handleClick}>
        <Box sx={{ ...style, width: 800 }}>
        <Typography variant='h4'  textAlign={"center"} paddingBottom={3} justifyContent={'center'}>Select Heroes</Typography>
        <Divider/>
           <CardItemHero data={listHero} Heros={setHeros}/>
            <CardItemHero data={listHero} Heros={setHeros}/>
           <Divider/>
           <Stack direction={'row'} justifyContent={"center"} spacing={3} paddingTop={3}>
                  <Button variant='outlined' size="large" sx={{minWidth:'120px'}} >Back</Button>
                  <Button variant='contained' size="large" sx={{minWidth:'120px'}} onClick={handleChooses} >Choose</Button>
           </Stack>
        </Box>
        </Modal>
    )
}

const SecondModal=()=>{
    const [ruby,setRuby] = useState('');
    const [openModalChild,setOpenModalChild] = useState(false);
    const handleChange =(e)=>{
        setRuby(e.target.value)
    }
    const onCloseModalChild=()=>{
         setOpenModalChild(false);
    }
    const onOpenModalChild=()=>{
        setOpenModalChild(true);
    }
    return(
        <Box sx={{ ...style, width: 550 }}>
        <Typography textAlign={"center"} variant='h4'>Partnership Details</Typography>
        <Typography variant='body1' textAlign={"center"}>
            You are about partner <Typography variant='h5' component='span'>Cryptonomo</Typography> base with another player.
            Enter the player's username or wallet address
        </Typography>
        <Stack paddingTop={5}>
        <TextField  label="Partner" placeholder='e.g. e1d9753f-a508-46cc-a428-1787595d63e4' color="info" />

        <Stack direction={"row"} justifyContent={"space-between"} paddingTop={5} spacing={2}>
        <FormControl fullWidth >
            <InputLabel id="demo-simple-select-label">Your RUBY Share</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={ruby}
                label="Your Ruby Split"
                onChange={handleChange}
            >
                <MenuItem value={10}>10% RUBY Earnings</MenuItem>
                <MenuItem value={20}>20% RUBY Earnings</MenuItem>
                <MenuItem value={30}>30% RUBY Earnings</MenuItem>
            </Select>
            </FormControl>
            
            <FormControl fullWidth >
                
            <InputLabel id="demo-simple-select-label">Partner RUBY Share</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={ruby}
                label="Your Ruby Split"
                onChange={handleChange}
            >
                <MenuItem value={10}>10% RUBY Earnings</MenuItem>
                <MenuItem value={20}>20% RUBY Earnings</MenuItem>
                <MenuItem value={30}>30% RUBY Earnings</MenuItem>
            </Select>
            </FormControl>

        </Stack>
         <Stack paddingTop={3}>
             <Typography variant='h6' paddingBottom={1}>Bundled Heroes</Typography>
         <Button variant='outlined' size='large' onClick={onOpenModalChild} startIcon={<Add/>}>Click to Add Heroes</Button>
         </Stack>
         <Stack paddingTop={3}>
             <Typography variant='h6' paddingBottom={1}>Bundled Statues</Typography>
         <Button variant='outlined' size='large' startIcon={<Add/>}>Click to Add Statues</Button>
         </Stack>
         <Stack direction={'row'} spacing={4} paddingTop={4} justifyContent={"center"}>
             <Button variant='outlined' sx={{minWidth:130}} size='large'>Back</Button>
             <Button variant='contained' sx={{minWidth:130}} size='large'>Continue</Button>
         </Stack>
        </Stack>
        <Modal open={openModalChild} onClose={onCloseModalChild}>
           <ChildModal/>
        </Modal>
        </Box>
    )
}

const CardModal=({clickHandle})=>{
    const [modalChild,setModalChild] = useState(false);
    const handleModalChild=()=>{

       setModalChild(true);
       
    }
    const handleModalClose =()=>{
        setModalChild(false);
    }
    return (
        <>
      <CardMedia
        component="img"
        height="300"
        image="/static/mock-images/Bases/map2.jpg"
        alt="green iguana"
        sx={{marginTop:'20px',borderRadius:'5px'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" textAlign={"center"} component="div">
            Create Partnership for "Cryptonomo"
        </Typography>
        <Typography variant="body1" textAlign={"center"} color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
       
      </CardContent>
      <CardActions sx={{justifyContent:'center'}}>
        <Button variant='contained' sx={{minWidth:'200px'}} onClick={handleModalChild}  size="large">Continue</Button>
        
      </CardActions>
      <Modal open={modalChild} onClose={handleModalClose}>
       <SecondModal/>
        </Modal>
    </>
    )
}

const CardItemHero =({data,Heros})=>{

    return(
        <Grid xs={12}>
             <Grid container  justifyContent={'center'}>
              <Divider/>
                {data.map(e=>{
                  return( 
                    <Grid xs={3} >
                       <CardItem  id={e.id} title={e.title} level={e.level} img={e.img} handleCheck={Heros}/>
                       </Grid>
                  )
                })}
                <Divider/>
           
        </Grid>
        </Grid>
       
    )
}

export const ListerningMore = () => {
      const[open,setOpen] = useState(false);
      const[modelOpen,setModelOpen]=useState(false);
      const [modalChild,setModalChild]=useState(false);
      const handleClickAway = ()=>{
          setOpen(false);
      }
      const handleClick=()=>{
          setOpen(prev=>!prev);
      }
      const modalHandle=()=>{
          setModelOpen(prev=>!prev);
      }
  return (
    <ClickAwayListener mouseEvent="onMouseDown" touchEvent="onTouchStart" onClickAway={handleClickAway} className='card_more'>
             <Box className='card_more'>
               <Button onClick={handleClick}  variant='text'>
                   <Stack spacing={0}>
                   <Typography textAlign={"center"}>...</Typography>
                  
                   </Stack>
                  
               </Button>
               {open ? (
              <Box className='card-list_items'>
                <Stack  className="card_stack" spacing={1}>
                  <Button sx={styleButton}  variant='text'>Put on sale</Button>
                  <Button sx={styleButton} variant='text'>List for rent</Button>
                  <Button sx={styleButton} onClick={modalHandle} variant='text'>Form Partnership</Button>
                  <Button sx={styleButton} variant='text'>Transfer</Button>
                  <Button sx={styleButton} variant='text'>Report</Button>
                 
                </Stack>
              </Box>
            ) : null}
              <Modal
        open={modelOpen}
        onClose={modalHandle}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 550 }}>
          <CardModal clickHandle={modalHandle}/>
         
        </Box>
      </Modal>
             </Box>
          
                
          </ClickAwayListener>
  )
}

