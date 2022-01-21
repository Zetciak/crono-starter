import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  applicationsTableDiv: {
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

  textAlignLeft: {
    textAlign: 'left',
  },

  textAlignRight: {
    textAlign: 'right',
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

  hrefImage: {
    display: 'inline',
    marginLeft: '10px',
  },

  tableHref: {
    '& a': {
      opacity: 1,
      transition: 'opacity .5s',
    },
    '& a:hover': {
      opacity: 0.8,
    },
  },

  trEelement: {
    display: 'block',
    marginTop: '16px',
    marginBottom: '16px',
  },

  tableElement111: {
    width: '111px',
    height: '24px',
    marginRight: '41px',
    overflow: 'hidden',
  },

  tableElement99: {
    width: '99px',
    height: '24px',
    marginRight: '41px',
    overflow: 'hidden',
  },

  lastTableElement99: {
    width: '99px',
    height: '24px',
    overflow: 'hidden',
  },

  //<<<<<<<<<<<<<<<<<<<< Responsive scale
  //1100px
  ['@media (max-width: 1100px)']: {
    applicationsTableDiv: {
      width: '95%',
      margin: '0 auto',
      marginTop: '150px',
    },
    horizontalLineTop: {
      width: '1024px',
    },
  },
}));

export default useStyles;
