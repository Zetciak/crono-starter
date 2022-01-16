import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buySellCrox: {
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: 'auto',
    marginRight: '208px',
    width: '408px',
  },

  buySellCroxBg: {
    background: '#13162F',
    border: '1px solid #2A2D44',
    borderRadius: '16px',
    width: '408px',
    height: '434px',
  },

  topButtons: {
    width: '378px',
    margin: '0 auto',
    height: '36px',
    '& p': {
      fontFamily: "'Manrope', sans-serif",
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '20px',
      color: '#FFFFFF',
      textTransform: 'none',
    },
  },

  topButton1: {
    width: '50%',
    padding: '8px 16px',
    borderRadius: '16px 0px 0px 0px',
    height: '100%',
    backgroundColor: '#25283F',
    opacity: '0.88',
    boxShadow: 'none',

    '&:hover': {
      backgroundColor: '#2a2e47',
    },
  },

  topButton2: {
    width: '50%',
    padding: '8px 16px',
    borderRadius: '0px 16px 0px 0px',
    height: '100%',
    backgroundColor: '#25283F',
    opacity: '0.5',
    boxShadow: 'none',

    '&:hover': {
      backgroundColor: '#2a2e47',
    },
  },

  insideButtons: {
    width: '90%',
    margin: '0 auto',
    height: '32px',
    background: 'rgba(118, 118, 128, 0.24)',
    borderRadius: '8.91px',
    marginTop: '24px',
    padding: '1.5px',
    '& p': {
      fontFamily: "'Manrope', sans-serif",
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '100%',
      color: '#FFFFFF',
      textTransform: 'none',
    },
  },

  insideButton1: {
    width: '50%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderRadius: '7px',
    boxShadow: 'none',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.00)',
      boxShadow: 'none',
    },
  },

  insideButton2: {
    width: '50%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    borderRadius: '7px',
    boxShadow: 'none',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
      boxShadow: 'none',
    },
  },

  topInfoTypography: {
    fontFamily: "'Manrope', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.2px',
    color: '#8F9BB7',
    width: '90%',
    margin: '0 auto',
    marginTop: '24px',
    '& a': {
      color: '#ffffff',
      fontWeight: '300',
      letterSpacing: '0.2px',
      textDecoration: 'underline',
      textDecorationThickness: '1px',
      transition: 'color .5s',
    },
    '& a:hover': {
      color: '#ffffffcc',
    },
  },

  editBoxInfo: {
    width: '90%',
    margin: '0 auto',
    marginTop: '16px',
    display: 'flex',
    '& p': {
      fontFamily: "'Manrope', sans-serif",
      fontStyle: 'normal',
      fontSize: '14px',
      lineHeight: '20px',
      color: 'rgba(255, 255, 255, 0.88);',
    },
  },

  editBoxPlaceHolder: {
    width: '50%',
    textAlign: 'left',
    letterSpacing: '0.2px',
    fontWeight: '300',
  },

  editBoxCroxAmount: {
    width: '50%',
    textAlign: 'right',
    fontWeight: '500',
  },

  editBoxDiv: {
    width: '90%',
    margin: '0 auto',
    marginTop: '8px',
  },

  numberEditBox: {
    width: '100%',
    background: '#090E27',
    border: '1px solid #2D3146',
    borderRadius: '8px',

    '& p': {
      fontFamily: "'Manrope', sans-serif",
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '24px',
      color: '#fff',
    },

    '& input': {
      padding: '0 0 0 16px',
      height: '48px',
      color: 'rgba(255, 255, 255, 0.88)',

      //Right arrows hide
      '&[type=number]': {
        '-moz-appearance': 'textfield',
      },
      '&::-webkit-outer-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0,
      },
      '&::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0,
      },
    },
  },

  editBoxAdornmentButton: {
    margin: '0px',
    padding: '0px',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    boxShadow: 'none',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.00)',
    },
  },

  bottomButtonsDiv: {
    width: '90%',
    margin: '0 auto',
    marginTop: '24px',
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

  unStakeBtn: {
    width: '100%',
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
  },

  unStakeBtnIcon: {
    '-webkit-transform': 'scaleX(-1)',
    transform: 'scaleX(-1)',
    color: '#fff',
  },

  buyCroxBtn: {
    width: '100%',
    height: '48px',
    background:
      'linear-gradient(90deg, rgba(255, 255, 255, 0.048) 0%, rgba(0, 0, 0, 0.048) 48.02%, rgba(255, 255, 255, 0) 100%), #20233B',
    border: '1px solid rgba(255, 255, 255, 0.16)',
    borderRadius: '8px',
    marginTop: '16px',

    '&:hover': {
      background:
        'linear-gradient(90deg, rgba(255, 255, 255, 0.048) 0%, rgba(0, 0, 0, 0.048) 48.02%, rgba(255, 255, 255, 0) 100%), #272b47',
      border: '1px solid rgba(255, 255, 255, 0.16)',
    },
  },

  bottomInfoTypography: {
    fontFamily: "'Manrope', sans-serif",
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.2px',
    color: '#8F9BB7',
    width: '90%',
    margin: '0 auto',
    marginTop: '24px',
  },

  //<<<<<<<<<<<<<<<<<<<< Responsive scale
  //1440px
  ['@media (max-width: 1440px)']: {
    buySellCrox: {
      marginRight: '100px',
    },
  },

  //1200px
  ['@media (max-width: 1200px)']: {
    buySellCrox: {
      marginRight: '50px',
    },
  },

  //1100px
  ['@media (max-width: 1100px)']: {
    buySellCrox: {
      width: '100%',
    },

    buySellCroxBg: {
      width: '50%',
      margin: 'auto',
    },

    topButtons: {
      width: '47%',
      margin: 'auto',
      marginTop: '20px',
    },

    //820px
    ['@media (max-width: 820px)']: {
      topButtons: {
        '& p': {
          fontSize: '12px',
          lineHeight: '100%',
        },
      },
    },

    //780px
    ['@media (max-width: 780px)']: {
      topInfoTypography: {
        lineHeight: '100%',
        fontSize: '14px',
      },
    },

    //690px
    ['@media (max-width: 690px)']: {
      buySellCroxBg: {
        width: '70%',
        margin: 'auto',
      },

      topButtons: {
        width: '65%',
        margin: 'auto',
        marginTop: '20px',
      },

      topInfoTypography: {
        fontSize: '12px',
      },
    },

    //450px
    ['@media (max-width: 450px)']: {
      buySellCroxBg: {
        width: '90%',
        margin: 'auto',
      },

      topButtons: {
        width: '83%',
        margin: 'auto',
        marginTop: '20px',
      },

      bottomInfoTypography: {
        fontSize: '11px',
      },
    },

    //350px
    ['@media (max-width: 350px)']: {
      buySellCroxBg: {
        width: '95%',
        margin: 'auto',
      },

      topButtons: {
        width: '87%',
        margin: 'auto',
        marginTop: '20px',
      },

      topInfoTypography: {
        fontSize: '11px',
      },

      insideButtons: {
        '& p': {
          fontSize: '12px',
        },
      },
    },
  },
}));

export default useStyles;
