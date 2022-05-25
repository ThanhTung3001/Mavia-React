// @mui
import PropTypes from 'prop-types';
import { alpha, styled,useTheme ,createTheme } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// components
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

export default function AppWidgetSummary({ title, total, icon, color = '#ede7f6', sx, ...other }) {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });
  return (
    <Card
    
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: 'center',
        ...sx,
      }}
      {...other}
      style={{backgroundColor: color}}
    >
      <IconWrapperStyle
      style={{
       
        // backgroundColor:"#039be5"
      }}
        sx={{
          color: "#039be5",
          // backgroundImage: (theme) =>
          //   `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
          //     theme.palette[color].dark,
          //     0.24
          //   )} 100%)`,
        }}
      >
        <Iconify icon={icon} width={60} height={60} />
      </IconWrapperStyle>

      <Typography variant="h5">{title}</Typography>

    </Card>
  );
}
