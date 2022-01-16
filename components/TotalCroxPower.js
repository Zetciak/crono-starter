//Imports
import Image from 'next/image';
import { Typography } from '@material-ui/core';

//CSS
import useStyles from '../styles/components/TotalCroxPowerStyle';

//Images
import shape from '../public/images/shape.svg';

//Script
function TotalCroxPower() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.mainCroxPowerInfo}>
        <Typography className={classes.mainCroxPowerInfoTitle1}>
          TOTAL CROX POWER{' '}
          <span className={classes.mainCroxPowerInfoTitle2}>
            (UPDATES EVERY DAY)
          </span>
        </Typography>
        <Typography className={classes.mainCroxPowerInfoTitle3}>
          4,090
          <span className={classes.mainCroxPowerInfoTitle4}>.54</span>
        </Typography>
        <div className={classes.mainCroxPowerProcentInfo}>
          <div className={classes.mainCroxPowerInfoSection1}>
            <Typography className={classes.mainCroxPowerInfoTitle5}>
              Single Asset Staking
            </Typography>
            <Typography className={classes.mainCroxPowerInfoTitle6}>
              28.5% APY / 1.0x CROX
            </Typography>
          </div>
          <div className={classes.mainCroxPowerShape}>
            <Image src={shape} alt="/" />
          </div>
          <div className={classes.mainCroxPowerInfoSection2}>
            <Typography className={classes.mainCroxPowerInfoTitle5}>
              LP $CROX-$CROX
            </Typography>
            <Typography className={classes.mainCroxPowerInfoTitle6}>
              128.5% APY / 2.0x CROX
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}

export default TotalCroxPower;
