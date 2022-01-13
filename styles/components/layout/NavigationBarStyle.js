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
          //900PX
          ['@media (max-width:900px)']: {
            fontSize: '20px',
          },
        },
        // & li MEDIA QUERRIES
        //900PX
        ['@media (max-width:900px)']: {
          display: 'block',
          padding: '0px',
          paddingBottom: '50px',
        },
      },
      '& li:nth-child(1)': {
        paddingLeft: '5px',

        // & li:nth-child(1) MEDIA QUERRIES
        //900PX
        ['@media (max-width:900px)']: {
          paddingTop: '50px',
        },
      },

      // & ul MEDIA QUERRIES
      //900PX
      ['@media (max-width:900px)']: {
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
    //900PX
    ['@media (max-width:900px)']: {
      marginTop: '26px',
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
    //900PX
    ['@media (max-width:900px)']: {
      display: 'flex',
      marginTop: '26px',
    },
    //600PX
    ['@media (max-width:600px)']: {
      marginRight: '50px',
    },
  },
});

export default useStyles;
