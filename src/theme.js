import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiListItemButton: {
      defaultProps: {
        disableTouchRipple: true,
      },
    },
  },
  palette: {
    // primary: {
    //   main: '#f0c000',
    // },
    primary: { main: 'rgb(102, 157, 246)' },
    background: { paper: 'rgb(5, 30, 52)' },
    secondary: {
      main: '#208080',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;

// components: {
//     MuiListItemButton: {
//       defaultProps: {
//         disableTouchRipple: true,
//       },
//     },
//   },
//   palette: {
//     mode: 'dark',
//     primary: { main: 'rgb(102, 157, 246)' },
//     background: { paper: 'rgb(5, 30, 52)' },
//   },
