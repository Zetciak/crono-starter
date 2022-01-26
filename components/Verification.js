//Imports
import { Button, Typography } from '@material-ui/core';
import Image from 'next/image';

//CSS
import useStyles from '../styles/components/VerificationStyle';

//Images
import circleImg from '../public/images/bigcircle.svg';

//Script
function Verification() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.verificationBgDiv}>
        <div className={classes.verificationDiv}>
          <div className={classes.textDivs}>
            <Typography className={classes.mainTitle}>
              Your verification status
            </Typography>
            <Typography className={classes.veriStatus}>
              Unverified user
            </Typography>
            <Typography className={classes.veriDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore{' '}
              <span className={classes.veriDescBlue}>
                et dolore magna aliqua!
              </span>
            </Typography>
            <Button variant="contained" className={classes.proveAddressBtn}>
              <Typography>Prove you address</Typography>
            </Button>
          </div>
          <div className={classes.imageDiv}>
            <Image src={circleImg} alt=""></Image>
          </div>
        </div>
      </div>
    </>
  );
}

export default Verification;
