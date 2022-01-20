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

  horizontalLine: {
    height: '1px',
    width: '100%',
    background: '#2A2D44',
  },

  tableTitles: {
    margin: '20px 24px 24px 24px',
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

  tableStyle112: {
    width: '11%',
  },

  tableStyle100: {
    width: '9.5%',
  },

  textAlignLeft: {
    textAlign: 'left',
  },

  textAlignRight: {
    textAlign: 'right',
  },

  tableElements: {
    margin: '8px 24px 20px 24px',
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

  //<<<<<<<<<<<<<<<<<<<< Responsive scale
  //1100px
  ['@media (max-width: 1100px)']: {
    applicationsTableDiv: {
      width: '95%',
      margin: '0 auto',
      marginTop: '150px',
    },
  },

  //975px
  ['@media (max-width: 975px)']: {
    tableTitles: {
      '& p': {
        fontSize: '15px',
      },
    },

    tableElements: {
      '& p': {
        fontSize: '15px',
      },
    },
  },

  //875px
  ['@media (max-width: 875px)']: {
    tableTitles: {
      margin: '15px 24px 15px 24px',
      '& p': {
        fontSize: '13px',
      },
    },

    tableElements: {
      margin: '2px 24px 10px 24px',
      '& p': {
        fontSize: '13px',
      },
    },
  },

  //775px
  ['@media (max-width: 775px)']: {
    tableTitles: {
      margin: '10px 24px 10px 24px',
      '& p': {
        fontSize: '11px',
      },
    },

    tableElements: {
      margin: '0 24px 5px 24px',
      '& p': {
        fontSize: '11px',
      },
    },
  },
}));

export default useStyles;
