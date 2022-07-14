import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#ffffff',
    '& a': {
      color: '#404040',
    },
  },
  brand: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: '80vh',
    display: 'flex',
    flex: '1',
    justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    // background: 'red'
    // maxWidth: '1024px'
    // backgroundColor: 'red',
  },
  footer: {
    marginTop: 10,
    textAlign: 'center',
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  form: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto',
  },
  navbarbutton: {
    color: '#b4b4b4',
    textTransform: 'initial',
  },
  transparentBackground: {
    backgroundColor: 'transparent',
  },
  error: {
    color: '#f04040',
  },
  fullWidth: {
    width: '100%',
  },
});

export default useStyles;
