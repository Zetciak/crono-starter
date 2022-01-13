import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  appBar: {
    position: 'relative',
    width: '100%',
    height: '115px',
    borderBottom: '1px solid rgba(143, 155, 183, 0.5)',
    background: 'none',
  },

  navigationTypography: {
    color: '#ffffff',
    '& ul': {
      paddingLeft: '56px',
      '& li': {
        fontFamily: "'Manrope', sans-serif",
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '24px',
        display: 'inline-block',
        padding: '40px 32px 50px 0px',
        '& a': {
          color: '#ffffff',
          transition: 'color .5s',
          '&:hover': {
            color: 'rgb(179, 179, 179)',
          },
          //1200PX
          ['@media (max-width:1200px)']: {
            fontSize: '20px',
          },
        },
        // & li MEDIA QUERRIES
        //1200PX
        ['@media (max-width:1200px)']: {
          display: 'block',
          padding: '0px',
          paddingBottom: '50px',
        },
      },
      '& li:nth-child(1)': {
        paddingLeft: '5px',

        // & li:nth-child(1) MEDIA QUERRIES
        //1200PX
        ['@media (max-width:1200px)']: {
          paddingTop: '50px',
        },
      },

      // & ul MEDIA QUERRIES
      //1200PX
      ['@media (max-width:1200px)']: {
        position: 'absolute',
        width: '100%',
        minHeight: '100vh',
        background: '#13162ff3',
        top: '115px',
        left: '0px',
        textAlign: 'center',
        padding: '0',
      },
    },
  },

  logo: {
    marginTop: '-5px',
    marginLeft: '90px',
    float: 'left',
    minHeight: '48px',
    minWidth: '48px',
    //MEDIA QUERRIES
    //600PX
    ['@media (max-width:600px)']: {
      marginLeft: '50px',
    },
    //1200PX
    ['@media (max-width:1200px)']: {
      marginTop: '26px',
    },
    //376PX
    ['@media (max-width:376px)']: {
      marginLeft: '15px',
    },
  },

  navBurger: {
    width: '30px',
    height: 'auto',
    marginTop: '-5px',
    marginRight: '90px',
    display: 'none',
    marginLeft: 'auto',
    cursor: 'pointer',
    fill: '#ffffff',
    transition: 'fill .5s',
    '&:hover': {
      fill: 'rgb(179, 179, 179)',
    },
    //MEDIA QUERRIES
    //1200PX
    ['@media (max-width:1200px)']: {
      display: 'flex',
      marginTop: '26px',
    },
    //600PX
    ['@media (max-width:600px)']: {
      marginRight: '50px',
    },
    //376PX
    ['@media (max-width:376px)']: {
      marginRight: '15px',
    },
  },

  connectWallet: {
    //btn
    padding: '12px 24px 14px',
    background:
      'linear-gradient(90deg, rgba(255, 255, 255, 0.048) 0%, rgba(0, 0, 0, 0.048) 48.02%, rgba(255, 255, 255, 0) 100%), #FFFFFF',
    border: '1px solid rgba(255, 255, 255, 0.16)',
    boxSizing: 'border-box',
    borderRadius: '8px',
    marginRight: '90px',
    marginLeft: 'auto',
    //hover
    '&:hover': {
      background:
        'linear-gradient(90deg, rgba(255, 255, 255, 0.048) 0%, rgba(0, 0, 0, 0.048) 48.02%, rgba(255, 255, 255, 0) 100%), rgb(220, 220, 220)',
    },
    '& span': {
      color: '#0062ff',
    },
    //Text
    '& p': {
      fontFamily: "'Manrope', sans-serif",
      fontStyle: 'normal',
      fontWeight: '800',
      fontSize: '16px',
      letterSpacing: '-0.02em',
      lineHeight: '22px',
      color: '#070707',
      textTransform: 'none',
    },

    //700PX
    ['@media (max-width:700px)']: {
      padding: '6px 12px 7px',
      '& p': {
        fontSize: '14px',
      },
    },

    //376PX
    ['@media (max-width:376px)']: {
      padding: '4px 8px 5px',
      '& p': {
        fontSize: '10px',
      },
    },

    //1200PX
    ['@media (max-width:1200px)']: {
      marginTop: '26px',
      marginRight: '0',
    },
  },
});

export default useStyles;
