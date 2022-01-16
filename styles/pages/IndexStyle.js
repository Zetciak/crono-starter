import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainFirstGrid: {
    marginTop: '48px',
    display: 'flex',
    width: '100%',
  },

  //<<<<<<<<<<<<<<<<<<<< Responsive scale
  //1100px
  ['@media (max-width: 1100px)']: {
    mainFirstGrid: {
      flexDirection: 'column',
    },
  },
}));

export default useStyles;
