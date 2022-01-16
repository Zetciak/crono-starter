import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainCroxPowerInfo: {
    color: '#ffffff',
    marginLeft: '208px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  mainCroxPowerInfoTitle1: {
    fontFamily: "'Sora', sans-serif",
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '20px',
    lineHeight: '32px',
  },

  mainCroxPowerInfoTitle2: {
    fontFamily: "'Manrope', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.2px',
  },

  mainCroxPowerInfoTitle3: {
    fontFamily: "'Sora', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '72px',
    lineHeight: '108px',
    marginBottom: '24px',
  },

  mainCroxPowerInfoTitle4: {
    color: 'rgba(255, 255, 255, 0.5)',
  },

  mainCroxPowerInfoSection1: {
    float: 'left',
  },

  mainCroxPowerInfoSection2: {
    marginLeft: '48px',
    float: 'right',
  },

  mainCroxPowerShape: {
    float: 'left',
    marginLeft: '48px',
  },

  mainCroxPowerInfoTitle5: {
    fontFamily: "'Sora', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#8F9BB7',
    marginBottom: '8px',
  },

  mainCroxPowerInfoTitle6: {
    fontFamily: "'Sora', sans-serif",
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '20px',
    lineHeight: '32px',
    color: '#ffffff',
  },

  //<<<<<<<<<<<<<<<<<<<< Responsive scale
  //1440px
  ['@media (max-width: 1440px)']: {
    mainCroxPowerInfo: {
      marginLeft: '100px',
    },
  },

  //1200px
  ['@media (max-width: 1200px)']: {
    mainCroxPowerInfo: {
      marginLeft: '50px',
    },
  },

  //1100px
  ['@media (max-width: 1100px)']: {
    mainCroxPowerInfoSection2: {
      float: 'left',
    },

    mainCroxPowerInfo: {
      width: '45%',
      margin: '0 auto',
      textAlign: 'center',
    },

    mainCroxPowerShape: {
      display: 'none',
    },

    mainCroxPowerInfoSection2: {
      marginLeft: '0px',
    },

    mainCroxPowerProcentInfo: {
      width: '50%',
      margin: '0 auto',
    },

    mainCroxPowerInfoTitle6: {
      marginBottom: '10px',
    },
  },

  //800px
  ['@media (max-width: 800px)']: {
    mainCroxPowerInfoTitle2: {
      display: 'block',
    },
  },

  //650px
  ['@media (max-width: 650px)']: {
    mainCroxPowerInfoTitle2: {
      display: 'block',
    },

    mainCroxPowerInfoTitle3: {
      fontSize: '50px',
      lineHeight: '78px',
    },
  },

  //550px
  ['@media (max-width: 550px)']: {
    mainCroxPowerProcentInfo: {
      width: '99%',
      margin: '0 auto',
    },
  },

  //450px
  ['@media (max-width: 450px)']: {
    mainCroxPowerInfoTitle3: {
      fontSize: '30px',
    },

    mainCroxPowerProcentInfo: {
      width: '90%',
      margin: '0 auto',
    },

    mainCroxPowerInfoTitle6: {
      marginBottom: '15px',
    },
  },
}));

export default useStyles;
