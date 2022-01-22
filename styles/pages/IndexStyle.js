import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainFirstGrid: {
    display: 'flex',
    width: '1024px',
    margin: '0 auto',
    marginTop: '48px',
  },

  //<<<<<<<<<<<<<<<<<<<< Responsive scale
  //1100px
  ['@media (max-width: 1100px)']: {
    mainFirstGrid: {
      width: '100%',
      flexDirection: 'column',
    },
  },
}));

export default useStyles;
