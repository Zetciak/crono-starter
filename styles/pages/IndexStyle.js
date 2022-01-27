import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainFirstGrid: {
    display: 'flex',
    width: '1024px',
    margin: '0 auto',
    marginTop: '30px',
  },

  footerMarginTop: {
    height: '214px',
    width: '1000rem',
    marginLeft: '-250rem',
    background: '#070b25',
  },

  //<<<<<<<<<<<<<<<<<<<< Responsive scale
  //1100px
  ['@media (max-width: 1100px)']: {
    mainFirstGrid: {
      width: '100%',
      flexDirection: 'column',
    },

    footerMarginTop: {
      height: '40px',
    },
  },
}));

export default useStyles;
