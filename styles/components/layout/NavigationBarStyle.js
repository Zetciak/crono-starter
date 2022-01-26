import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  //Top nav block
  appBar: {
    position: 'fixed',
    width: '100%',
    height: '115px',
    borderBottom: '1px solid rgba(143, 155, 183, 0.5)',
    background: 'none',
  },

  //Width limit div
  toolBar: {
    width: '1500px',
    margin: '0 auto',
  },

  //Navigation elements
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
        },
      },
      '& li:nth-child(1)': {
        paddingLeft: '5px',
      },
    },
  },

  //Logo
  logo: {
    marginTop: '-5px',
    marginLeft: '90px',
    minHeight: '48px',
    minWidth: '48px',
  },

  //Responsive navigation button
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
  },

  //Connect wallet button
  connectWallet: {
    padding: '12px 24px 14px',
    background:
      'linear-gradient(90deg, rgba(255, 255, 255, 0.048) 0%, rgba(0, 0, 0, 0.048) 48.02%, rgba(255, 255, 255, 0) 100%), #FFFFFF',
    border: '1px solid rgba(255, 255, 255, 0.16)',
    boxSizing: 'border-box',
    borderRadius: '8px',
    marginRight: '90px',
    marginLeft: 'auto',
    '&:hover': {
      background:
        'linear-gradient(90deg, rgba(255, 255, 255, 0.048) 0%, rgba(0, 0, 0, 0.048) 48.02%, rgba(255, 255, 255, 0) 100%), rgb(235, 235, 235)',
    },
    '& span': {
      color: '#0062ff',
    },
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
  },

  //<<<<<<<<<<<<<<<<<<<< Responsive scale

  //1516px
  ['@media (max-width: 1516px)']: {
    //Width limit div
    toolBar: {
      width: '100%',
    },
  },

  //1200 px
  ['@media (max-width: 1200px)']: {
    //Navigation elements
    navigationTypography: {
      '& ul': {
        '& li': {
          '& a': {
            fontSize: '20px',
          },
          display: 'block',
          padding: '0px',
          paddingBottom: '50px',
        },
        '& li:nth-child(1)': {
          paddingTop: '50px',
        },
        position: 'absolute',
        width: '100%',
        height: '100vh',
        background: '#13162ff3',
        top: '115px',
        left: '0px',
        textAlign: 'center',
        padding: '0',
      },
    },

    //Logo
    logo: {
      marginTop: '26px',
    },

    //Responsive navigation button
    navBurger: {
      display: 'flex',
      marginTop: '26px',
    },

    //Connect wallet button
    connectWallet: {
      marginTop: '26px',
      marginRight: '0',
    },
  },

  //700 px
  ['@media (max-width: 700px)']: {
    //Connect wallet button
    connectWallet: {
      padding: '6px 12px 7px',
      '& p': {
        fontSize: '14px',
      },
    },
  },

  //600 px
  ['@media (max-width: 600px)']: {
    //Logo
    logo: {
      marginLeft: '50px',
    },

    //Responsive navigation button
    navBurger: {
      marginRight: '50px',
    },
  },

  //376 px
  ['@media (max-width: 376px)']: {
    //Logo
    logo: {
      marginLeft: '15px',
    },

    //Responsive navigation button
    navBurger: {
      marginRight: '15px',
    },

    //Connect wallet button
    connectWallet: {
      '& p': {
        fontSize: '10px',
      },
    },
  },
});

export default useStyles;
