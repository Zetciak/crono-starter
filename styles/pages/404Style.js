import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  error404Div: {
    margin: '30px auto',
    width: '90%',
  },

  errorTypography: {
    fontFamily: "'Manrope', sans-serif",
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '40px',
    lineHeight: '60px',
    color: '#ffffff',
    width: '100%',
    textAlign: 'center',
    opacity: '0.8',
  },

  buttonDiv: {
    width: '173px',
    margin: '0 auto',
    marginTop: '30px',
    '& p': {
      fontFamily: "'Manrope', sans-serif",
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '100%',
      color: '#ffffff',
      letterSpacing: '-0.02em',
      textTransform: 'none',
    },
  },

  stakeBtn: {
    width: '173px',
    height: '48px',
    background:
      'linear-gradient(90deg, rgba(255, 255, 255, 0.048) 0%, rgba(0, 0, 0, 0.048) 48.02%, rgba(255, 255, 255, 0) 100%), #20233B',
    border: '1px solid rgba(255, 255, 255, 0.16)',
    borderRadius: '8px',

    '&:hover': {
      background:
        'linear-gradient(90deg, rgba(255, 255, 255, 0.048) 0%, rgba(0, 0, 0, 0.048) 48.02%, rgba(255, 255, 255, 0) 100%), #272b47',
      border: '1px solid rgba(255, 255, 255, 0.16)',
    },
  },

  footerMarginTop: {
    height: '40px',
    width: '500rem',
    marginLeft: '-250rem',
    background: '#070b25',
  },

  imageDiv: {
    width: '520px',
    height: '384px',
    margin: '50px auto',
    opacity: '0.5',
  },

  //<<<<<<<<<<<<<<<<<<<< Responsive scale
  //720px
  ['@media (max-width: 720px)']: {
    errorTypography: {
      fontSize: '35px',
      lineHeight: '45px',
    },
  },

  //570px
  ['@media (max-width: 570px)']: {
    imageDiv: {
      width: '90%',
      height: 'auto',
      margin: '50px auto',
      opacity: '0.5',
    },
  },

  //330px
  ['@media (max-width: 330px)']: {
    errorTypography: {
      fontSize: '30px',
      lineHeight: '45px',
    },
  },
}));

export default useStyles;
