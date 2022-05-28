import PropTypes from 'prop-types';
import { useEffect,useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// material
import { styled } from '@mui/material/styles';
import { Box, Link, Button, Drawer, Typography, Avatar, Stack,Grid } from '@mui/material';
// mock
import account from '../../_mock/account';
// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import Logo from '../../components/Logo';
import Scrollbar from '../../components/Scrollbar';
import NavSection from '../../components/NavSection';
//
import navConfig from './NavConfig';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 240;



const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12],
}));

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {

  const[open,setOpen]=useState(true)

  const [widthSide,setWidthSide]=useState(DRAWER_WIDTH);

  const handleClickSide = (e)=>{
    if(open){
      setOpen(false);
      setWidthSide(65);
    }else{
        setOpen(true);
        setWidthSide(DRAWER_WIDTH);
    }
  }
  const RootStyle = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('lg')]: {
      flexShrink: 0,
      width: widthSide,
    },
  }));
  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
        <Logo />
      </Box>

        <Grid container justifyContent={'flex-end'}>
          <Button onClick={handleClickSide} variant='text' style={{
            maxWidth:'50px',
            margin:'10px 0 10px 0'
          }}>
            {open===true?<CloseIcon/>:<KeyboardArrowRightIcon/>}
          </Button>
        </Grid>
      <NavSection navConfig={navConfig} />

      <Box sx={{ flexGrow: 1 }} />

     
    </Scrollbar>
  );

  return (
    <RootStyle>
     
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: widthSide },
          }}
        >
          {renderContent}
       
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: widthSide,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
}
