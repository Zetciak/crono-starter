//Imports

//CSS
import { Typography } from '@material-ui/core';
import useStyles from '../styles/components/TiersStyle';

//Images
import tier1img from '../public/images/tier1.svg';
import tier2img from '../public/images/tier2.svg';
import tier3img from '../public/images/tier3.svg';
import tier4img from '../public/images/tier4.svg';
import tier5img from '../public/images/tier5.svg';
import Image from 'next/image';

//Script
function Tiers() {
  const classes = useStyles();

  let numberOfTiers = 0;
  let youAreOn = false;

  //Tier list and drawing it
  const tierList = [
    { name: 'Name of Tier 1', pools: '250', img: tier1img },
    { name: 'Name of Tier 2', pools: '1000', img: tier2img },
    { name: 'Name of Tier 3', pools: '3000', img: tier3img },
    { name: 'Name of Tier 4', pools: '10000', img: tier4img },
    { name: 'Name of Tier 5', pools: '30000', img: tier5img },
  ];
  const drawTierList = [];

  for (var i = 0; i < tierList.length; i++) {
    let sel = false;
    {
      if (numberOfTiers == tierList[i].pools) {
        sel = i;
        youAreOn = i;
      } else if (numberOfTiers > tierList[i].pools) {
        if (tierList[i + 1]) {
          if (numberOfTiers < tierList[i + 1].pools) {
            sel = i;
            youAreOn = i;
          }
        } else {
          sel = i;
          youAreOn = i;
        }
      }
    }

    if (sel === i) {
      drawTierList.push(
        <>
          <div key={i} className={classes.tierListOneElement}>
            <div className={classes.tierListTexts}>
              <Typography className={classes.tierListTitleTypography}>
                {tierList[i].name}
              </Typography>
              <Typography className={classes.tierListDescTypography}>
                {tierList[i].pools
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                + POLS
              </Typography>
            </div>
            <Image
              src={tierList[i].img}
              alt=""
              className={classes.tierListImage}
            ></Image>
          </div>
          {i + 1 === tierList.length ? null : (
            <div className={classes.tierListLine}></div>
          )}
        </>
      );
    } else {
      drawTierList.push(
        <>
          <div
            key={i}
            className={`${classes.tierListOneElement} ${classes.tierListDisabledElement}`}
          >
            <div className={classes.tierListTexts}>
              <Typography className={classes.tierListTitleTypography}>
                {tierList[i].name}
              </Typography>
              <Typography className={classes.tierListDescTypography}>
                {tierList[i].pools
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                + POLS
              </Typography>
            </div>
            <Image
              src={tierList[i].img}
              alt=""
              className={classes.tierListImage}
            ></Image>
          </div>
          {i + 1 === tierList.length ? null : (
            <div className={classes.tierListLine}></div>
          )}
        </>
      );
    }
  }

  return (
    <>
      <div className={classes.tiersDiv}>
        <Typography className={classes.tiersTitleTypography}>
          Talk about Tier
          <br />
          in Cronos Launchpad
        </Typography>
        <Typography className={classes.tiersDescTypography}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce ut
          placerat orci nulla pellentesque dignissim enim sit. Morbi non arcu
          risus quis varius quam quisque id diam.
        </Typography>
        <div className={classes.bottomTiersList}>
          <div className={classes.leftTiersSection}>{drawTierList}</div>
          <div className={classes.tiersSectionLine}></div>
          <div className={classes.rightTiersSection}>
            <div className={classes.topRightTiersSection}>
              <Typography className={classes.tiersRightTitleTypography}>
                Check which Tier you are on
              </Typography>
              <Typography className={classes.tiersRightDescTypography}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. (I
                {"'"}d mention Staking 1X and LP 2X here).
              </Typography>
            </div>
            <div className={classes.tiersRightSectionLine}></div>
            <div className={classes.bottomRightTiersSection}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tiers;
