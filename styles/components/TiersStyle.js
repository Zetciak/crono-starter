import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  tiersDiv: {
    marginLeft: '208px',
    marginRight: '208px',
    width: 'auto',
  },

  tiersTitleTypography: {
    fontFamily: "'Manrope', sans-serif",
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '40px',
    lineHeight: '60px',
    color: '#cdcdce',
  },

  tiersDescTypography: {
    fontFamily: "'Manrope', sans-serif",
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '26px',
    letterSpacing: '-0.02em',
    color: '#8F9BB7',
    width: '700px',
    marginTop: '16px',
  },

  bottomTiersList: {
    marginTop: '64px',
    height: '580px',
    width: '100%',
    display: 'flex',
  },

  leftTiersSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100%',
    width: '28%',
    marginRight: '32px',
    marginTop: '34px',
  },

  rightTiersSection: {
    height: '100%',
    width: '72%',
  },

  tierListTexts: {
    marginRight: '32px',
    float: 'left',
  },

  tierListTitleTypography: {
    fontFamily: "'Manrope', sans-serif",
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '32px',
    color: '#ffffff',
    textAlign: 'right',
    marginTop: '5px',
  },

  tierListDescTypography: {
    fontFamily: "'Manrope', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.2px',
    color: '#8F9BB7',
    textAlign: 'right',
  },

  tierListImage: {
    float: 'left',
    opacity: 1.0,
  },

  tierListDisabledElement: {
    opacity: 0.5,
  },

  tierListLine: {
    width: '1px',
    height: '32px',
    background: '#2A2D44',
    opacity: 1.0,
    margin: '8px 0px 8px 197px',
  },

  tiersSectionLine: {
    height: '100%',
    width: '1px',
    background: '#2A2D44',
  },

  tiersRightSectionLine: {
    height: '1px',
    width: '100%',
    background: '#2A2D44',
  },

  topRightTiersSection: {
    marginTop: '47px',
    marginLeft: '25px',
  },

  tiersRightTitleTypography: {
    fontFamily: "'Manrope', sans-serif",
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '32px',
    lineHeight: '48px',
    color: '#cdcdce',
    marginBottom: '8px',
  },

  tiersRightDescTypography: {
    fontFamily: "'Manrope', sans-serif",
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '26px',
    letterSpacing: '-0.02em',
    color: '#8F9BB7',
    marginBottom: '58px',
  },

  //<<<<<<<<<<<<<<<<<<<< Responsive scale
  //1100px
  ['@media (max-width: 1100px)']: {
    tiersDiv: {
      width: '70%',
      margin: '0 auto',
    },

    tiersTitleTypography: {
      textAlign: 'center',
      width: '100%',
      lineHeight: '115%',
      marginTop: '40px',
    },

    tiersDescTypography: {
      textAlign: 'center',
      width: '100%',
      lineHeight: '115%',
    },
  },

  //600px
  ['@media (max-width: 600px)']: {
    tiersTitleTypography: {
      fontSize: '33px',
      lineHeight: '110%',
    },

    tiersDescTypography: {
      fontSize: '16px',
      lineHeight: '115%',
    },
  },

  //500px
  ['@media (max-width: 500px)']: {
    tiersTitleTypography: {
      fontSize: '28px',
      lineHeight: '110%',
    },

    tiersDescTypography: {
      fontSize: '16px',
      lineHeight: '115%',
    },
  },

  //465px
  ['@media (max-width: 465px)']: {
    tiersTitleTypography: {
      fontSize: '28px',
      lineHeight: '110%',
    },

    tiersDescTypography: {
      fontSize: '16px',
      lineHeight: '115%',
    },
  },

  //450px
  ['@media (max-width: 450px)']: {
    tiersDiv: {
      width: '90%',
      margin: '0 auto',
      marginTop: '40px',
    },

    tiersTitleTypography: {
      fontSize: '28px',
      lineHeight: '110%',
    },

    tiersDescTypography: {
      fontSize: '14px',
      lineHeight: '115%',
    },
  },

  //350px
  ['@media (max-width: 350px)']: {
    tiersDiv: {
      width: '95%',
      margin: '0 auto',
      marginTop: '40px',
    },
  },
}));

export default useStyles;
