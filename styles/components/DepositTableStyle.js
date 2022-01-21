import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  depositTableDiv: {
    width: '1024px',
    margin: '0 auto',
    marginTop: '128px',
    background: '#13162F',
    border: '1px solid #2A2D44',
    boxSizing: 'border-box',
    borderRadius: '16px',
    overflowX: 'auto',
  },

  mainTitle: {
    fontFamily: "'Manrope', sans-serif",
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '40px',
    lineHeight: '60px',
    color: '#cdcdce',
    marginTop: '24px',
    marginLeft: '24px',
    marginBottom: '34px',
  },

  horizontalLineTop: {
    height: '1px',
    width: '100%',
    background: '#2A2D44',
  },

  horizontalLine: {
    height: '1px',
    width: '100%',
    background: '#2A2D44',
  },

  tableTitles: {
    margin: '0px 24px 0px 24px',
    width: 'calc(100% - 48px)',
    fontFamily: "'Manrope', sans-serif",
    fontStyle: 'normal',
    '& p': {
      fontWeight: '400',
      fontSize: '17px',
      lineHeight: '24px',
      color: '#8F9BB7',
    },
  },

  tableElements: {
    margin: '5px 24px 10px 24px',
    width: 'calc(100% - 48px)',
    fontFamily: "'Manrope', sans-serif",
    fontStyle: 'normal',
    '& p': {
      fontWeight: '400',
      fontSize: '17px',
      lineHeight: '24px',
      color: 'rgba(255, 255, 255, 0.8);',
    },
  },

  trEelement: {
    display: 'block',
    marginTop: '16px',
    marginBottom: '16px',
  },

  textAlignLeft: {
    textAlign: 'left',
  },

  textAlignRight: {
    textAlign: 'right',
  },

  tableElement160: {
    width: '160px',
    height: '24px',
    marginRight: '56px',
    overflow: 'hidden',
  },

  tableElement99: {
    width: '99px',
    height: '24px',
    marginRight: '86px',
    overflow: 'hidden',
  },

  tableElement196: {
    width: '196px',
    height: '100%',
    overflow: 'hidden',
  },

  buttonsDiv: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& p': {
      fontFamily: "'Manrope', sans-serif",
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '20px',
      color: '#ffffff',
      textTransform: 'none',
    },
  },

  depositBtn: {
    width: '84px',
    height: '36px',
    marginRight: '16px',
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

  buyCroxBtn: {
    width: '96px',
    height: '36px',
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

  //<<<<<<<<<<<<<<<<<<<< Responsive scale
  //1100px
  ['@media (max-width: 1100px)']: {
    depositTableDiv: {
      width: '95%',
      margin: '0 auto',
      marginTop: '150px',
    },

    mainTitle: {
      marginLeft: '0',
      textAlign: 'center',
    },

    horizontalLineTop: {
      width: '1024px',
    },
  },

  //1026px
  ['@media (max-width: 1026px)']: {
    depositTableDiv: {
      marginTop: '50px',
    },
  },

  //600px
  ['@media (max-width: 600px)']: {
    mainTitle: {
      fontSize: '28px',
      lineHeight: '110%',
    },
  },

  //400px
  ['@media (max-width: 400px)']: {
    mainTitle: {
      fontSize: '23px',
      lineHeight: '110%',
    },
  },
}));

export default useStyles;
