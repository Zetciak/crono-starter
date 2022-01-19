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
    width: '287px',
    marginRight: '32px',
    marginTop: '34px',
  },

  rightTiersSection: {
    height: '100%',
    width: '705px',
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

  bottomPolsLine: {
    marginTop: '121px',
    marginLeft: '25px',
    width: '672px',
    height: '8px',
    background: '#2A2D44',
    borderRadius: '99px',
  },

  filledTierListLine: {
    //width: '300px',
    height: '8px',
    background: '#3E44EE',
    borderRadius: '99px',
  },

  filledTierCircle: {
    width: '24px',
    height: '24px',
    background: '#3E44EE',
    border: '3px solid #080C26',
    boxSizing: 'border-box',
    borderRadius: '999px',
    marginTop: '-16px',
    //marginLeft: 'calc(300px - 16px)',
  },

  bottomPolsInfo: {
    position: 'absolute',
    marginTop: '-70px',
    //marginLeft: 'calc(300px - 33px)',
  },

  bottomPolsText: {
    background: '#3E44EE',
    borderRadius: '999px',
    height: '40px',
    padding: '8px 18px',
    fontFamily: "'Sora', sans-serif",
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '16px',
    lineHeight: '25px',
    color: '#ffffff',
    textAlign: 'center',
  },

  triangleImg: {
    width: '26px',
    margin: '0 auto',
    marginTop: '-8px',
  },

  stripesDiv: {
    display: 'flex',
    marginLeft: '25.2px',
    marginTop: '24px',
  },

  stripe: {
    width: '1px',
    height: '24px',
    background: '#2A2D44',
    marginRight: '29.4px',
    float: 'left',
  },

  stripeActive: {
    background: '#3E44EE',
  },

  stripesTextsDiv: {
    display: 'flex',
    marginLeft: '45px',
    marginTop: '16px',
  },

  stripePolsInfoText: {
    fontFamily: "'Manrope', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.2px',
    color: '#8F9BB7',
    float: 'left',
    marginRight: '62px',
    '&:last-child': {
      marginRight: '0px',
    },
  },

  bottomButtonsDiv: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '33px',
    marginTop: '60px',
    '& p': {
      fontFamily: "'Manrope', sans-serif",
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '22px',
      color: '#ffffff',
      letterSpacing: '-0.02em',
      textTransform: 'none',
    },
  },

  stakeBtn: {
    width: '173px',
    height: '48px',
    marginRight: '32px',
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

  buyCroxBtn: {
    width: '173px',
    height: '48px',
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

  mobileTierShow: {
    display: 'none',
  },

  mobileIMG: {
    width: '70px',
    margin: '0 auto',
  },

  mobileTierName: {
    fontFamily: "'Manrope', sans-serif",
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '32px',
    color: '#ffffff',
    textAlign: 'center',
    marginTop: '10px',
  },

  mobileTierDesc: {
    fontFamily: "'Manrope', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: '0.2px',
    color: '#8F9BB7',
    textAlign: 'center',
  },

  mobileYourPools: {
    fontFamily: "'Manrope', sans-serif",
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '32px',
    color: '#ffffff',
    textAlign: 'center',
    marginTop: '10px',
    marginTop: '20px',
  },

  mobileYourPools2: {
    fontFamily: "'Manrope', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: '0.2px',
    color: '#8F9BB7',
    textAlign: 'center',
  },

  //<<<<<<<<<<<<<<<<<<<< Responsive scale
  //1440px
  ['@media (max-width: 1440px)']: {
    tiersDiv: {
      marginLeft: '100px',
      marginRight: '100px',
      width: 'auto',
    },
  },

  //1250px
  ['@media (max-width: 1250px)']: {
    tiersDiv: {
      marginLeft: '50px',
      marginRight: '50px',
      width: 'auto',
    },
  },

  //1150px
  ['@media (max-width: 1150px)']: {
    tiersDiv: {
      marginLeft: '30px',
      marginRight: '30px',
      width: 'auto',
    },
  },

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

    leftTiersSection: {
      display: 'none',
    },

    tiersSectionLine: {
      display: 'none',
    },

    tiersRightSectionLine: {
      display: 'none',
    },

    rightTiersSection: {
      height: '100%',
      width: '100%',
    },

    topRightTiersSection: {
      marginLeft: '0',
      textAlign: 'center',
    },

    bottomButtonsDiv: {
      justifyContent: 'center',
      marginRight: '0',
    },

    mobileTierShow: {
      display: 'block',
    },

    tiersRightTitleTypography: {
      textAlign: 'center',
      width: '100%',
      lineHeight: '115%',
      marginTop: '-60px',
      fontWeight: '600',
      fontSize: '40px',
    },

    tiersRightDescTypography: {
      textAlign: 'center',
      width: '100%',
      lineHeight: '115%',
      marginTop: '20px',
      fontWeight: '500',
      fontSize: '18px',
    },
  },

  //1026px
  ['@media (max-width: 1026px)']: {
    bottomPolsInfo: {
      display: 'none',
    },

    bottomPolsLine: {
      display: 'none',
    },

    stripesDiv: {
      display: 'none',
    },

    stripesTextsDiv: {
      display: 'none',
    },

    bottomButtonsDiv: {
      marginTop: '40px',
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

    tiersRightTitleTypography: {
      fontSize: '33px',
      lineHeight: '110%',
    },

    tiersRightDescTypography: {
      fontSize: '16px',
      lineHeight: '115%',
    },
  },

  //520px
  ['@media (max-width: 520px)']: {
    bottomButtonsDiv: {
      '& p': {
        fontSize: '14px',
      },
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

    tiersRightTitleTypography: {
      fontSize: '28px',
      lineHeight: '110%',
    },

    tiersRightDescTypography: {
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

    tiersRightTitleTypography: {
      fontSize: '28px',
      lineHeight: '110%',
    },

    tiersRightDescTypography: {
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

    tiersRightTitleTypography: {
      fontSize: '28px',
      lineHeight: '110%',
    },

    tiersRightDescTypography: {
      fontSize: '14px',
      lineHeight: '115%',
    },
  },

  //370px
  ['@media (max-width: 370px)']: {
    bottomButtonsDiv: {
      '& p': {
        fontSize: '13px',
      },
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

  //320px
  ['@media (max-width: 370px)']: {
    bottomButtonsDiv: {
      '& p': {
        fontSize: '12px',
      },
    },
  },
}));

export default useStyles;
