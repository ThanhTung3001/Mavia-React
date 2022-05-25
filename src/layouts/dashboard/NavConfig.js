// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Game',
    path: '/dashboard/app',
    icon: getIcon('bxs:dashboard'),
  },
  {
    title: 'Explore',
    path: '/dashboard/user',
    icon: getIcon('carbon:explore'),
  },
  {
    title: 'Marketplace',
    path: '/dashboard/products',
    icon: getIcon('healthicons:market-stall-outline'),
  },
  {
    title: 'My Account',
    path: '/dashboard/blog',
    icon: getIcon('codicon:account'),
  },
];

export default navConfig;
