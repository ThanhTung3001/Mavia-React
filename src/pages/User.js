import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import guid, { isGuid } from 'guid';
// material
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from '@mui/material';
// components
import {
  List,PropaneTank,CenterFocusStrong,Support,Gamepad,
  FavoriteBorder, Menu,NoBackpack,Policy, Castle,Hearing,Visibility, Favorite,SportsEsports,AccountTree,KeyboardDoubleArrowDown,
  PanoramaPhotosphere, Man, ArrowForwardIos,HealthAndSafety ,AccountCircle,Diamond,Article,LibraryBooks ,NotificationsActive,Settings
 } from '@mui/icons-material';
import Page from '../components/Page';
import Label from '../components/Label';
import Scrollbar from '../components/Scrollbar';
import Iconify from '../components/Iconify';
import SearchNotFound from '../components/SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../sections/@dashboard/user';
import {IconRubyFirst,IconRubySecond,IconRubyThirt}from '../components/iconCustom/IconSvg';
// mock
import USERLIST from '../_mock/user';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'company', label: 'Company', alignRight: false },
  { id: 'role', label: 'Role', alignRight: false },
  { id: 'isVerified', label: 'Verified', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: '' },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function User() {
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(25);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };
  const processToken =(token)=>{

    const head = token.slice(1,5);
    const tail =token.slice(33,40);
    return `${head}...${tail}`;
  }
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredUsers.length === 0;

  return (
    <Page title="User">
      <Container>
        <Stack direction="column" alignItems="start" justifyContent="space-between" mb={2}>
          <Typography variant="h4" gutterBottom>
            All Users
          </Typography>
          <Typography variant="h7" gutterBottom>
           1,234 result
          </Typography>
        
        </Stack>

        <Card>
        
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                
                <TableBody>
                  {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const { id, name, role, status, company, avatarUrl, isVerified } = row;
                    const isItemSelected = selected.indexOf(name) !== -1;

                    return (
                      <TableRow
                        hover
                        key={id}
                        tabIndex={-1}
                        role="checkbox"
                        selected={isItemSelected}
                        aria-checked={isItemSelected}
                      >
                      
                        <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            
                            <Avatar alt={name} src={avatarUrl} />
                            <Stack direction="column" alignItems='center' >
                            <Typography variant="h6" noWrap>
                          
                             <RouterLink to="/dashboard/user/1" style={{
                               textDecoration:'none',
                               color:"black"
                             }}> {name}</RouterLink>
                            </Typography>
                            <Typography variant="h7" noWrap>
                              {processToken(guid.raw())}
                            </Typography>
                            </Stack>
                          </Stack>
                        </TableCell>
                        <TableCell align="left">
                          <Stack direction='column'>
                            <Typography variant="h6">
                            {company}
                            </Typography>
                            <Typography variant="h7">
                                 Matches won
                            </Typography>
                          </Stack>    
                        </TableCell>
                        <TableCell align="left">
                        <Stack direction='column'>
                            <Typography variant="h6" component={"span"} >
                              
                               <Button startIcon={ <IconRubySecond style={{width:'20px',height:'20px'}} />} color='inherit'> {role}</Button>
                             
                            </Typography>
                            <Typography variant="h7">
                                Total Sapphire  Earned
                            </Typography>
                          </Stack>    
                        </TableCell>
                        <TableCell align="left">  
                        <Stack direction='column'>

                            <Typography variant="h6">
                          
                            {isVerified}
                            </Typography>
                            <Typography variant="h7">
                                Trophies Won
                            </Typography>
                          </Stack>    </TableCell>
                        <TableCell align="left">
                        <Stack direction='column'>

                              <Typography variant="h6">

                              {status}
                              </Typography>
                              <Typography variant="h7">
                                 Win:Lose Ratio
                              </Typography>
                              </Stack>  
                        </TableCell>

                      
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isUserNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={USERLIST.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </Page>
  );
}
