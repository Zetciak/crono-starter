//Imports
import { Typography } from '@material-ui/core';
import Image from 'next/image';

//CSS
import useStyles from '../styles/components/ApplicationsTableStyle';

//Images
import hrefImage from '../public/images/hrefimg.svg';

//Script

function decimalCount(number) {
  const numberAsString = number.toString();
  if (numberAsString.includes('.')) {
    return numberAsString.split('.')[1].length;
  }
  return 0;
}

function ApplicationsTable() {
  const classes = useStyles();

  //Tier list and drawing it
  const appList = [
    {
      projectName: 'Luart',
      startIDO: '04 Jan 2022',
      detailsHref: '#',
      vestingHref: '#',
      priceToken: 0.025,
      allocation: 123,
      tokens: 1000000,
    },
    {
      projectName: 'Starterra',
      startIDO: '05 Feb 2022',
      detailsHref: '#',
      vestingHref: '#',
      priceToken: 0.23,
      allocation: 4123,
      tokens: 1233412,
    },
    {
      projectName: 'Hellcats',
      startIDO: '06 Nov 2022',
      detailsHref: '#',
      vestingHref: '#',
      priceToken: 3.54,
      allocation: 1242,
      tokens: 78234,
    },
  ];
  const drawAppList = [];

  for (let i = 0; i < appList.length; i++) {
    let afterdot = decimalCount(appList[i].priceToken);
    if (afterdot < 2) {
      afterdot = 2;
    }
    if (appList[i].priceToken > 1 && afterdot > 2) {
      afterdot = 2;
    }

    let priceTokendecimal = (
      appList[i].priceToken - Math.floor(appList[i].priceToken)
    ).toFixed(afterdot);
    priceTokendecimal = priceTokendecimal.toString().replace('0', '');
    let priceTokennotdecimal = Math.floor(appList[i].priceToken)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    let priceToken = priceTokennotdecimal + '' + priceTokendecimal;

    let allocation = appList[i].allocation
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    let tokens = appList[i].tokens
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    drawAppList.push(
      <div key={i}>
        <tr className={classes.trEelement}>
          <td>
            <Typography
              className={`${classes.tableElement111} ${classes.textAlignLeft}`}
            >
              {appList[i].projectName}
            </Typography>
          </td>
          <td>
            <Typography
              className={`${classes.tableElement111} ${classes.textAlignLeft}`}
            >
              {appList[i].startIDO}
            </Typography>
          </td>
          <td>
            <Typography
              className={`${classes.tableElement99} ${classes.textAlignLeft} ${classes.tableHref}`}
            >
              <a href={appList[i].detailsHref}>
                Research
                <div className={classes.hrefImage}>
                  <Image src={hrefImage} alt=""></Image>
                </div>
              </a>
            </Typography>
          </td>
          <td>
            <Typography
              className={`${classes.tableElement99} ${classes.textAlignLeft} ${classes.tableHref}`}
            >
              <a href={appList[i].vestingHref}>
                Overview
                <div className={classes.hrefImage}>
                  <Image src={hrefImage} alt=""></Image>
                </div>
              </a>
            </Typography>
          </td>
          <td>
            <Typography
              className={`${classes.tableElement99} ${classes.textAlignRight}`}
            >
              {priceToken}$
            </Typography>
          </td>
          <td>
            <Typography
              className={`${classes.tableElement99} ${classes.textAlignRight}`}
            >
              {allocation}$
            </Typography>
          </td>
          <td>
            <Typography
              className={`${classes.lastTableElement99} ${classes.textAlignRight}`}
            >
              {tokens}
            </Typography>
          </td>
        </tr>
        {i + 1 === appList.length ? null : (
          <div className={classes.horizontalLine}></div>
        )}
      </div>
    );
  }

  return (
    <>
      <div className={classes.applicationsTableDiv}>
        <Typography className={classes.mainTitle}>Your Applications</Typography>
        <div className={classes.horizontalLineTop}></div>
        <table className={classes.tableTitles}>
          <tr className={classes.trEelement}>
            <td>
              <Typography
                className={`${classes.tableElement111} ${classes.textAlignLeft}`}
              >
                Project Name
              </Typography>
            </td>
            <td>
              <Typography
                className={`${classes.tableElement111} ${classes.textAlignLeft}`}
              >
                Start IDO Date
              </Typography>
            </td>
            <td>
              <Typography
                className={`${classes.tableElement99} ${classes.textAlignLeft} ${classes.tableHref}`}
              >
                Details
              </Typography>
            </td>
            <td>
              <Typography
                className={`${classes.tableElement99} ${classes.textAlignLeft} ${classes.tableHref}`}
              >
                Vesting
              </Typography>
            </td>
            <td>
              <Typography
                className={`${classes.tableElement99} ${classes.textAlignRight}`}
              >
                Price Token
              </Typography>
            </td>
            <td>
              <Typography
                className={`${classes.tableElement99} ${classes.textAlignRight}`}
              >
                Allocation
              </Typography>
            </td>
            <td>
              <Typography
                className={`${classes.lastTableElement99} ${classes.textAlignRight}`}
              >
                Tokens
              </Typography>
            </td>
          </tr>
        </table>
        <div className={classes.horizontalLineTop}></div>
        <table className={classes.tableElements}>{drawAppList}</table>
      </div>
    </>
  );
}

export default ApplicationsTable;
