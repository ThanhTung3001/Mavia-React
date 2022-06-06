import React, { useState } from 'react'
import {
    Box,
    Stack,
    Button,
    ClickAwayListener,
    Typography
} from'@mui/material'


const styles={
  position:'absolute',
  top:0,
  right:0
}
const styleButton={
    color:'black',
    backgroundColor:'##F9FAFB'
}

export const ListerningMore = () => {
      const[open,setOpen] = useState(false);
      const handleClickAway = ()=>{
          setOpen(false);
      }
      const handleClick=()=>{
          setOpen(prev=>!prev);
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
                  <Button sx={styleButton} variant='text'>Form Partnership</Button>
                  <Button sx={styleButton} variant='text'>Transfer</Button>
                  <Button sx={styleButton} variant='text'>Report</Button>
                 
                </Stack>
              </Box>
            ) : null}
             </Box>
          </ClickAwayListener>
  )
}

