import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  verificationBgDiv: {
    width: '100%',
    height: '529px',
    marginTop: '128px',
    /* 
      >>>>>>>>>>> Lokalnie to działa, vercel wyrzuca błąd - przywrócić jeżeli skrypt będzie po serwerze.
      / Ewentualnie jeżeli to moja wina prosiłbym w feedbacku o wyjaśnienie.
    */
    background:
      'url(https://i.imgur.com/vbkhKpW.png)  no-repeat center rgba(10, 13, 43, 1)',
    '-webkit-background-size': 'cover',
    backgroundSize: 'cover',
    borderBottom: '1px solid #161A35',
  },

  verificationDiv: {
    width: '1250px',
    margin: '0 auto',
    display: 'flex',
  },

  mainTitle: {
    fontFamily: "'Manrope', sans-serif",
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '40px',
    letterSpacing: '-1px',
    color: '#cdcdce',
    paddingTop: '67px',
  },

  veriStatus: {
    fontFamily: "'Manrope', sans-serif",
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '40px',
    letterSpacing: '-1px',
    color: '#FF535E',
    marginTop: '16px',
  },

  veriDesc: {
    fontFamily: "'Manrope', sans-serif",
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '40px',
    letterSpacing: '-1px',
    color: '#FFFFFF',
    marginTop: '64px',
    width: '725px',
  },

  veriDescBlue: {
    color: '#33CCFF',
  },

  textDivs: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  imageDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    'mix-blend-mode': 'color-dodge',
    marginTop: '80px',
    marginLeft: '40px',
  },

  proveAddressBtn: {
    marginTop: '64px',
    width: '191px',
    height: '48px',
    background:
      'linear-gradient(90deg, rgba(255, 255, 255, 0.048) 0%, rgba(0, 0, 0, 0.048) 48.02%, rgba(255, 255, 255, 0) 100%), #3C42F5',
    border: '1px solid rgba(255, 255, 255, 0.16)',
    borderRadius: '8px',

    '&:hover': {
      background:
        'linear-gradient(90deg, rgba(255, 255, 255, 0.048) 0%, rgba(0, 0, 0, 0.048) 48.02%, rgba(255, 255, 255, 0) 100%), #4349fa',
      border: '1px solid rgba(255, 255, 255, 0.16)',
    },

    '& p': {
      fontFamily: "'Manrope', sans-serif",
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '22px',
      color: '#ffffff',
      letterSpacing: '-0.02em',
      textTransform: 'none',
    },
  },

  //<<<<<<<<<<<<<<<<<<<< Responsive scale
  //1350px
  ['@media (max-width: 1350px)']: {
    verificationDiv: {
      width: '100%',
    },

    imageDiv: {
      display: 'none',
    },

    mainTitle: {
      textAlign: 'center',
      width: '90%',
      margin: '0 auto',
    },

    veriStatus: {
      textAlign: 'center',
      width: '90%',
      margin: '0 auto',
      marginTop: '16px',
    },

    veriDesc: {
      textAlign: 'center',
      width: '90%',
      margin: '0 auto',
      marginTop: '64px',
    },

    proveAddressBtn: {
      margin: '0 auto',
      marginTop: '64px',
    },
  },

  //1100px
  ['@media (max-width: 1100px)']: {
    veriDesc: {
      fontSize: '25px',
      lineHeight: '125%',
    },
  },

  //500px
  ['@media (max-width: 500px)']: {
    verificationBgDiv: {
      height: '440px',
    },

    mainTitle: {
      fontSize: '28px',
      lineHeight: '40px',
    },

    veriStatus: {
      fontSize: '28px',
      lineHeight: '40px',
      marginTop: '10px',
    },

    veriDesc: {
      fontSize: '20px',
      lineHeight: '125%',
      marginTop: '20px',
    },
  },

  //350px
  ['@media (max-width: 350px)']: {
    verificationBgDiv: {
      height: '440px',
    },

    mainTitle: {
      fontSize: '25px',
      lineHeight: '40px',
    },

    veriStatus: {
      fontSize: '25px',
      lineHeight: '40px',
      marginTop: '10px',
    },

    veriDesc: {
      fontSize: '17px',
      lineHeight: '125%',
      marginTop: '20px',
    },
  },
}));

export default useStyles;
