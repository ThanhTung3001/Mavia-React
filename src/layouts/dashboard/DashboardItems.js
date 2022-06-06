import React,{ useState } from 'react'
import { ListItemButton,ListItem,ListItemIcon,ListItemText,Collapse,List } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function DashboardItems ({navConfig,open}) {
   const [subNav,setSubNav]=useState(false);

   const SingleItem=({data})=>{
       alert(subNav)
       if(data.subList!==undefined){
            return  (<>
         {   (subNav===true) ?<ExpandLess/> : <ExpandMore />}
        
           {
           data.subList.map(e=>(
            <Collapse in={subNav}  timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                {e.icon}
                </ListItemIcon>
                <ListItemText primary={e.title} />
            </ListItemButton>
            </List>
              </Collapse>
           )
           )}
      
            </> 
            )
       }
       return null;
   }
  

  return (
    <>
     {navConfig.map((text, index) => (
            <ListItem key={text.title} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 30,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon className='icon_sidebar'
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {text.icon}
                </ListItemIcon>
                <ListItemText onClick={()=>{setSubNav(prev=>!prev)}} primary={text.title} sx={{ opacity: open ? 1 : 0 }} />
                <SingleItem  data={text}/>
        
               
              </ListItemButton>
            </ListItem>
          ))}
    </>
  )
}
