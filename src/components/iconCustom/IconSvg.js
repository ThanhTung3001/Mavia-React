import { Box, SvgIcon } from '@mui/material'
import React from 'react'

export const IconRubyFirst = (props) => {
  return (
    <Box>
        <img style={{width:'20px',height:'20px'}} src="/static/mock-images/Common/ruby1.png" alt="" />
    </Box>
  )
}
export const IconRubySecond =({style})=>{
 return(
    <Box>
    <img style={style} src="/static/mock-images/Common/ruby2.png" alt="" />
</Box>
 )
}
export const IconRubyThirt =()=>{
    return(
       <Box>
       <img style={{width:'20px',height:'20px'}} src="/static/mock-images/Common/ruby3.png" alt="" />
   </Box>
    )
   }
   export const IconHero =({width='40px',height='40px'})=>{
    return(
       <Box>
       <img style={{width:"40px",height:"40px"}} src="/static/mock-images/Char/Layer 34 Large.png" alt="" />
   </Box>
    )
   }
   export const IconTower =({width='40px',height='40px'})=>{
    return(
       <Box>
       <img style={{width:"auto",height:"35px",marginRight:'2px'}} src="/static/mock-images/Common/Tower.png" alt="" />
   </Box>
    )
   }