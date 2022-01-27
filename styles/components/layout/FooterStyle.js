import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  footerDiv: {
    minHeight: '435px',
    width: '100%',
    background: '#070b25',
  },

  insideFooterDiv: {
    color: 'white',
    width: '1250px',
    minHeight: '389px',
    margin: '0 auto',
  },

  topFooterSection: {
    borderBottom: '1px solid rgba(143, 155, 183, 0.5)',
    height: '81px',
  },

  logo: {
    minHeight: '48px',
    minWidth: '48px',
    float: 'left',
  },

  logoText: {
    fontFamily: "'Manrope', sans-serif",
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    float: 'left',
    letterSpacing: '-0.02em',
    marginTop: '13px',
    marginLeft: '16px',
  },

  footerLogos: {
    float: 'left',
  },

  footerApply: {
    float: 'right',
  },

  applyText: {
    fontFamily: "'Manrope', sans-serif",
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    float: 'left',
    letterSpacing: '-0.02em',
    marginTop: '13px',
    marginLeft: '16px',
    marginRight: '24px',
  },

  applyBtn: {
    width: '145px',
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

  centerFooterSection: {
    marginTop: '38px',
    height: '182px',
  },

  subscribeSection: {
    width: '385px',
    float: 'left',
  },

  subscribeTitle: {
    fontFamily: "'DM Sans', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '22px',
    lineHeight: '29px',
    color: '#ffffff',
    letterSpacing: '-0.3px',
    width: '165px',
  },

  editBoxDiv: {
    width: '100%',
    marginTop: '30px',
  },

  editBox: {
    width: '100%',
    background:
      'linear-gradient(90deg, rgba(255, 255, 255, 0.048) 0%, rgba(0, 0, 0, 0.048) 48.02%, rgba(255, 255, 255, 0) 100%), #20233B',
    border: '1px solid rgba(255, 255, 255, 0.16)',
    borderRadius: '8px',

    '& input': {
      padding: '0 0 0 13px',
      height: '48px',
      color: 'rgba(255, 255, 255, 0.88)',
      fontFamily: "'Manrope', sans-serif",
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '18px',
      color: '#fff',
    },
  },

  editBoxAdornmentButton: {
    margin: '0px',
    padding: '0px',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    boxShadow: 'none',
    minWidth: '40px',
    width: '40px',
    marginRight: '10px',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.00)',
      boxShadow: 'none',
    },

    '& span': {
      backgroundColor: 'rgba(255, 255, 255, 0.00)',
    },
  },

  editBoxAdornmentIcon: {
    color: '#ffffff',
    height: '18px',
  },

  linksSection: {
    float: 'right',
    width: '595px',
  },

  linksTitle: {
    fontFamily: "'DM Sans', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '17px',
    lineHeight: '22px',
    color: '#33CCFF',
    letterSpacing: '-0.231818px',
    marginBottom: '20px',
  },

  linkText: {
    fontFamily: "'DM Sans', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '20px',
    color: '#FFFFFF',
    letterSpacing: '-0.231818px',
    marginBottom: '20px',
    '&:last-child': {
      marginBottom: '0px',
    },
  },

  bottomLinkText: {
    fontFamily: "'DM Sans', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '20px',
    color: '#FFFFFF',
    letterSpacing: '-0.231818px',
    marginBottom: '20px',
    '&:last-child': {
      marginBottom: '0px',
    },
  },

  leftLinksSection: {
    width: '180px',
    marginRight: '30px',
    float: 'left',
  },

  centerLinksSection: {
    width: '180px',
    marginRight: '30px',
    float: 'left',
  },

  rightLinksSection: {
    width: '170px',
    float: 'left',
  },

  bottomFooterSection: {
    marginTop: '70px',
    height: '20px',
  },

  bottomLinksTexts: {
    marginRight: '39px',
    '&:last-child': {
      marginRight: '0px',
    },
  },

  leftBottomFooterSection: {
    float: 'left',
  },

  rightBottomFooterSection: {
    float: 'right',
  },

  bottomLinksIcon: {
    opacity: '1.0',
    transition: 'opacity .5s',
    '&:hover': {
      opacity: '0.8',
    },
  },

  bottomLinksIcon: {
    marginRight: '34px',
    '&:last-child': {
      marginRight: '0px',
    },
  },

  //<<<<<<<<<<<<<<<<<<<< Responsive scale
  //1440px
  ['@media (max-width: 1440px)']: {
    insideFooterDiv: {
      width: '90%',
    },
  },

  //1150px
  ['@media (max-width: 1150px)']: {
    subscribeSection: {
      width: '30%',
    },
  },

  //1000px
  ['@media (max-width: 1000px)']: {
    linksSection: {
      clear: 'both',
      width: '95%',
      margin: '0 auto',
      marginTop: '40px',
      height: '220px',
    },

    subscribeSection: {
      width: '100%',
      clear: 'both',
    },

    leftLinksSection: {
      width: '32%',
      marginRight: '3%',
    },

    centerLinksSection: {
      width: '32%',
      marginRight: '0',
    },

    rightLinksSection: {
      width: '32%',
      marginRight: '1%',
    },

    subscribeTitle: {
      textAlign: 'center',
      width: '100%',
    },

    editBoxDiv: {
      width: '300px',
      margin: '0 auto',
      marginTop: '30px',
    },

    footerDiv: {
      height: '535px',
    },
  },

  //650px
  ['@media (max-width: 650px)']: {
    leftLinksSection: {
      clear: 'both',
      width: '90%',
      margin: '0 auto',
    },

    centerLinksSection: {
      clear: 'both',
      width: '90%',
      margin: '30px auto 0 auto',
    },

    rightLinksSection: {
      clear: 'both',
      width: '90%',
      margin: '30px auto 0 auto',
    },

    footerDiv: {
      height: '920px',
    },

    bottomFooterSection: {
      marginTop: '580px',
    },

    linkText: {
      width: '100%',
      textAlign: 'center',
    },

    linksTitle: {
      width: '100%',
      textAlign: 'center',
    },

    applyText: {
      fontSize: '15px',
    },

    logoText: {
      fontSize: '15px',
    },
  },

  //600px
  ['@media (max-width: 600px)']: {
    leftBottomFooterSection: {
      borderTop: '1px solid rgba(143, 155, 183, 0.5)',
      width: '100%',
      textAlign: 'center',
      marginTop: '-20px',
      paddingTop: '20px',
    },

    rightBottomFooterSection: {
      width: '100%',
      textAlign: 'center',
      marginTop: '20px',
    },

    footerDiv: {
      height: '980px',
    },
  },

  //570px
  ['@media (max-width: 570px)']: {
    applyText: {
      fontSize: '14px',
    },

    logoText: {
      fontSize: '14px',
    },

    applyBtn: {
      width: '130px',
      height: '40px',
      marginTop: '5px',

      '& p': {
        fontFamily: "'Manrope', sans-serif",
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '100%',
        color: '#ffffff',
        letterSpacing: '-0.02em',
        textTransform: 'none',
      },
    },
  },

  //530px
  ['@media (max-width: 530px)']: {
    footerLogos: {
      clear: 'both',
      marginLeft: '50%',
      transform: 'translate(-50%)',
    },

    footerApply: {
      clear: 'both',
      width: '95%',
      margin: '0 auto',
      marginTop: '3px',
    },

    topFooterSection: {
      height: '120px',
    },

    applyText: {
      width: '40%',
      marginRight: '15px',
    },

    applyBtn: {
      width: '40%',
    },
  },

  //420px
  ['@media (max-width: 420px)']: {
    applyText: {
      marginTop: '15px',
      fontSize: '12px',
    },

    applyBtn: {
      marginTop: '7px',
      height: '35px',
      '& p': {
        fontSize: '12px',
      },
    },

    editBoxDiv: {
      width: '95%',
    },

    subscribeTitle: {
      fontSize: '18px',
      lineHeight: '100%',
    },
  },

  //360px
  ['@media (max-width: 360px)']: {
    applyText: {
      width: '95%',
      textAlign: 'center',
      margin: '0 auto',
    },

    applyBtn: {
      width: '95%',
      textAlign: 'center',
      margin: '0 auto',
      marginTop: '13px',
    },

    topFooterSection: {
      height: '160px',
    },
  },

  //350px
  ['@media (max-width: 350px)']: {
    logoText: {
      display: 'none',
    },

    applyText: {
      marginTop: '10px',
    },

    applyBtn: {
      marginTop: '10px',
    },
  },
});

export default useStyles;
