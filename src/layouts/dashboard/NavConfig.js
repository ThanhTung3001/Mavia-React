// component

import ExploreIcon from '@mui/icons-material/Explore';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import StorefrontIcon from '@mui/icons-material/Storefront';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Game',
    path: '/dashboard/app',
    icon: <VideogameAssetIcon/>,
    haveSubNav:false
   
  },
  {
    title: 'Explore',
    path: '/dashboard/user',
    icon: <ExploreIcon/>,  
    haveSubNav:false
  },
  {
    title: 'Marketplace',
    path: '/dashboard/products',
    icon: <StorefrontIcon/>,
    haveSubNav:true,
    subList:[
      {
        title:"Dashboard",
        path:"/dashboard",
        icon:<DashboardIcon/>
      },{
         title:"Market",
         path:"/dasboard/market",
         icon:<LocalGroceryStoreIcon/>
      }
    ]
  },
  {
    title: 'My Account',
    path: '/dashboard/blog',
    icon: <AccountCircleIcon/>,
    haveSubNav:false
  },
];

export default navConfig;
