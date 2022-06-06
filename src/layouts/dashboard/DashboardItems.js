import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ListItemButton, ListItem, ListItemIcon, ListItemText, Collapse, List } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  createBrowserHistory,
  createHashHistory,
  createMemoryHistory
} from 'history'


const activeStyle = {
  bgColor:'#2065D1'
}


const ButtonDashboard =({text,open})=>{
  const navigate = useNavigate();
  const [active,setActive] = useState(false);
   const [subNav,setSubNav]=useState(false);

   const handleRedirect = ()=>{
     
    navigate(text.path,{replace:true})
   }
   
   
   const SingleItem = ({ data }) => {
    // alert(subNav)
    if (data.subList !== undefined) {
      return (<>
        {(subNav === true) ? <ExpandLess sx={{ display:open?"block":"none" }} /> : <ExpandMore sx={{ display:open?"block":"none" }} />}

      </>
      )
    }
    return null;
  }
  const CollapseItem= ({data})=>{
    if (data.subList !== undefined) {
      return (
         <>
         {
           data.subList.map(e => (
            <Collapse in={subNav} timeout='auto' unmountOnExit>
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
          )
         }
         </>
      )
    }
    return null;
  }

   return (
  <>
    <ListItemButton onClick={() => { setSubNav(prev => !prev); handleRedirect() }}
            sx={{
              minHeight: 30,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              backgroundColor:active?"#2065D1":""
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
            <ListItemText  primary={text.title} sx={{ opacity: open ? 1 : 0 }} />
            <SingleItem data={text} />
          </ListItemButton>
          <CollapseItem data={text}/>
  </>
   )

}

export default function DashboardItems({ navConfig, open }) {
 

  return (
    <>
      {navConfig.map((text, index) => (
        <ListItem key={text.title} disablePadding sx={{ display: 'block' }}>
          <ButtonDashboard text={text} open={open} />
        </ListItem>
      ))}
    </>
  )
}
