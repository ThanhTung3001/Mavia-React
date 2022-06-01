import PropTypes from 'prop-types';
import {Diamond,PanoramaPhotosphere,ModeNight,Bolt} from'@mui/icons-material'
import guid, { isGuid } from 'guid';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton,Button,ButtonGroup } from '@mui/material';
// components
import Iconify from '../../components/Iconify';
//

import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import NotificationsPopover from './NotificationsPopover';



// ----------------------------------------------------------------------

const DRAWER_WIDTH = 65;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};
const processToken =(token)=>{

  const head = token.slice(1,8);
  const tail =token.slice(30,40);
  return `${head}...${tail}`;
}
export default function DashboardNavbar({ onOpenSidebar }) {
  return (
    <RootStyle>
      <ToolbarStyle>
        <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary', display: { lg: 'none' } }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>

        <Searchbar />
        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
           <Button variant='outlined' startIcon={<Diamond fontSize='small' color='primary'/>}>115,200.46</Button>
           <Button variant='outlined' startIcon={<Diamond fontSize='small' color='error'/>}>451,234.36</Button>
           <Button variant='outlined' startIcon={<PanoramaPhotosphere fontSize='small'/>}>212,234.43</Button>
           <Button variant='outlined'  startIcon={<ModeNight fontSize='small' color='inherit' style={{
             color:'black'
           }}/>}/>
            <Button variant='outlined' startIcon={<Bolt fontSize='small' color='inherit' style={{
             color:'black'
           }}/>}/>
           <ButtonGroup disableElevation variant="contained">
            <Button startIcon={<PanoramaPhotosphere fontSize='small'/>}>0,0747ETH</Button>
            <Button disabled id="button_token" >{processToken(guid.raw())}</Button>
          </ButtonGroup>
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}
