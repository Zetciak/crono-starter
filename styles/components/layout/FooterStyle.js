import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  footerDiv: {
    height: '435px',
    width: '100%',
    background: '#070b25',
  },

  insideFooterDiv: {
    color: 'white',
    width: '1250px',
    height: '389px',
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

  leftLinksSection: {
    width: '170px',
    marginRight: '40px',
    float: 'left',
  },

  centerLinksSection: {
    width: '170px',
    marginRight: '40px',
    float: 'left',
  },

  rightLinksSection: {
    width: '170px',
    float: 'left',
  },

  //<<<<<<<<<<<<<<<<<<<< Responsive scale
  //1440px
  ['@media (max-width: 1440px)']: {
    insideFooterDiv: {
      width: '90%',
    },
  },
});

export default useStyles;
