//Imports
import {
  Button,
  Typography,
  TextField,
  InputAdornment,
} from '@material-ui/core';
import Link from 'next/link';

//CSS
import useStyles from '../styles/components/BuySellCroxStyle';

//Icons
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';

//Script
function BuySellCrox() {
  const classes = useStyles();
  let walletCroxAmount = 70.5;

  function setMaxCroxAmount() {
    document.getElementById('numberEditBox').value = walletCroxAmount;
  }

  return (
    <>
      <div className={classes.buySellCrox}>
        <div className={classes.topButtons}>
          <Button variant="contained" className={classes.topButton1}>
            <Typography>SINGLE ASSET STAKING</Typography>
          </Button>
          <Button variant="contained" className={classes.topButton2}>
            <Typography>LP TOKEN STAKING</Typography>
          </Button>
        </div>

        <div className={classes.buySellCroxBg}>
          <div className={classes.insideButtons}>
            <Button variant="contained" className={classes.insideButton1}>
              <Typography>Stake $CROX</Typography>
            </Button>
            <Button variant="contained" className={classes.insideButton2}>
              <Typography>Unstake</Typography>
            </Button>
          </div>

          <Typography className={classes.topInfoTypography}>
            When you unstake your CROX, you lose access to all future IDO
            whitelists. <Link href="/learnMore">Learn more.</Link>
          </Typography>

          <div className={classes.editBoxInfo}>
            <Typography className={classes.editBoxPlaceHolder}>
              Amount to Unstake
            </Typography>
            <Typography className={classes.editBoxCroxAmount}>
              70.5 $CROX
            </Typography>
          </div>

          <div className={classes.editBoxDiv}>
            <TextField
              type="number"
              className={classes.numberEditBox}
              id="numberEditBox"
              autoComplete="off"
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment
                    className={classes.editBoxAdornment}
                    position="end"
                  >
                    <Button
                      variant="contained"
                      className={classes.editBoxAdornmentButton}
                      onClick={setMaxCroxAmount}
                    >
                      <Typography>MAX</Typography>
                    </Button>
                  </InputAdornment>
                ),
              }}
              placeholder="0.00"
            />
          </div>

          <div className={classes.bottomButtonsDiv}>
            <Button
              variant="contained"
              className={classes.unStakeBtn}
              startIcon={
                <LockOpenOutlinedIcon className={classes.unStakeBtnIcon} />
              }
            >
              <Typography>Unstake</Typography>
            </Button>
            <Button variant="contained" className={classes.buyCroxBtn}>
              <Typography>Buy $CROX</Typography>
            </Button>
          </div>

          <Typography className={classes.bottomInfoTypography}>
            Your POLS tokens will be locked for 7 days. After that time, you’re
            free to withdraw at any time.
          </Typography>
        </div>
      </div>
    </>
  );
}

export default BuySellCrox;
