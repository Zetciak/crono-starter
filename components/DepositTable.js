//Imports
import { Typography, Button } from '@material-ui/core';

//CSS
import useStyles from '../styles/components/DepositTableStyle';

//Script
function DepositTable() {
  const classes = useStyles();

  //Tier list and drawing it
  const depositList = [
    { asset: 'CROX', balance: 1004, staked: 2000, apy: 20.33 },
    { asset: 'LP CROX-CROWN', balance: 423, staked: 0, apy: 134.23 },
  ];
  const drawDepositList = [];

  for (let i = 0; i < depositList.length; i++) {
    let balance = depositList[i].balance
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    let staked = depositList[i].staked
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    let apy = depositList[i].apy
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    drawDepositList.push(
      <div key={i}>
        <tr className={classes.trEelement}>
          <td>
            <Typography
              className={`${classes.tableElement160} ${classes.textAlignLeft}`}
            >
              {depositList[i].asset}
            </Typography>
          </td>
          <td>
            <Typography
              className={`${classes.tableElement99} ${classes.textAlignRight}`}
            >
              {balance}
            </Typography>
          </td>
          <td>
            <Typography
              className={`${classes.tableElement99} ${classes.textAlignRight}`}
            >
              {staked}
            </Typography>
          </td>
          <td>
            <Typography
              className={`${classes.tableElement99} ${classes.textAlignRight}`}
            >
              {apy}%
            </Typography>
          </td>
          <td>
            <Typography
              className={`${classes.tableElement196} ${classes.textAlignRight}`}
            >
              <div className={classes.buttonsDiv}>
                <Button variant="contained" className={classes.depositBtn}>
                  <Typography>Deposit</Typography>
                </Button>
                <Button variant="contained" className={classes.buyCroxBtn}>
                  <Typography>Withdraw</Typography>
                </Button>
              </div>
            </Typography>
          </td>
        </tr>
        {i + 1 === depositList.length ? null : (
          <div className={classes.horizontalLine}></div>
        )}
      </div>
    );
  }

  return (
    <>
      <div className={classes.depositTableDiv}>
        <Typography className={classes.mainTitle}>Deposit</Typography>
        <div className={classes.horizontalLineTop}></div>
        <table className={classes.tableTitles}>
          <tr className={classes.trEelement}>
            <td>
              <Typography
                className={`${classes.tableElement160} ${classes.textAlignLeft}`}
              >
                Asset
              </Typography>
            </td>
            <td>
              <Typography
                className={`${classes.tableElement99} ${classes.textAlignRight}`}
              >
                Balance
              </Typography>
            </td>
            <td>
              <Typography
                className={`${classes.tableElement99} ${classes.textAlignRight}`}
              >
                Staked
              </Typography>
            </td>
            <td>
              <Typography
                className={`${classes.tableElement99} ${classes.textAlignRight}`}
              >
                APY
              </Typography>
            </td>
            <td>
              <Typography
                className={`${classes.tableElement196} ${classes.textAlignRight}`}
              >
                Actions
              </Typography>
            </td>
          </tr>
        </table>
        <div className={classes.horizontalLineTop}></div>
        <table className={classes.tableElements}>{drawDepositList}</table>
      </div>
    </>
  );
}

export default DepositTable;
