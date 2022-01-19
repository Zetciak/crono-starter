//Imports
import Image from 'next/image';
import { useState, useRef } from 'react';
import useResize from '../hooks/useResize';

//CSS
import { Typography, Button } from '@material-ui/core';
import useStyles from '../styles/components/TiersStyle';

//Images
import tier1img from '../public/images/tier1.svg';
import tier2img from '../public/images/tier2.svg';
import tier3img from '../public/images/tier3.svg';
import tier4img from '../public/images/tier4.svg';
import tier5img from '../public/images/tier5.svg';
import triangle from '../public/images/triangle.svg';

//Script
function Tiers() {
  const classes = useStyles();

  const [numberOfTiers, setNumberOfTiers] = useState(3450.24);
  let youAreOn = false;

  const polsTextRef = useRef();
  const { width, height } = useResize(polsTextRef);

  //Tier list and drawing it
  const tierList = [
    { name: 'Name of Tier 1', pools: '250', img: tier1img },
    { name: 'Name of Tier 2', pools: '1000', img: tier2img },
    { name: 'Name of Tier 3', pools: '3000', img: tier3img },
    { name: 'Name of Tier 4', pools: '10000', img: tier4img },
    { name: 'Name of Tier 5', pools: '30000', img: tier5img },
  ];
  const drawTierList = [];

  for (let i = 0; i < tierList.length; i++) {
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
        <div key={i}>
          <div className={classes.tierListOneElement}>
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
        </div>
      );
    } else {
      drawTierList.push(
        <div key={i}>
          <div
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
        </div>
      );
    }
  }

  //Custom slider positions

  const slidertable = [
    { proc: 0, pools: 0 },
    { proc: 8, pools: 250 },
    { proc: 28, pools: 1000 },
    { proc: 50, pools: 3000 },
    { proc: 75, pools: 10000 },
    { proc: 100, pools: 30000 },
  ];
  let maxSliderWidth = 672;
  let countWidthToAdd = 0;

  function setSliderPosition(newvalue) {
    for (let i = 0; i < slidertable.length; i++) {
      if (newvalue === slidertable[i].pools) {
        countWidthToAdd = (slidertable[i].proc / 100) * maxSliderWidth;
      } else {
        if (newvalue > slidertable[i].pools) {
          if (slidertable[i + 1]) {
            if (newvalue < slidertable[i + 1].pools) {
              let one =
                (newvalue - slidertable[i].pools) /
                (slidertable[i + 1].pools - slidertable[i].pools);
              let two = slidertable[i + 1].proc - slidertable[i].proc;
              let three = two * one;
              let four = slidertable[i].proc + three;
              countWidthToAdd = (four / 100) * maxSliderWidth;
            }
          } else {
            countWidthToAdd = maxSliderWidth;
          }
        }
      }
    }
  }
  setSliderPosition(numberOfTiers);

  //Kreski
  const stripes = [];

  for (let i = 0; i < 23; i++) {
    let localLeftMargin = i * 30;
    if (localLeftMargin < countWidthToAdd) {
      stripes.push(
        <div
          key={i}
          className={`${classes.stripe} ${classes.stripeActive}`}
        ></div>
      );
    } else {
      stripes.push(<div key={i} className={classes.stripe}></div>);
    }
  }

  //Napisy pod kreskami
  const stripesTexts = [];

  for (let i2 = 0; i2 < slidertable.length; i2++) {
    if (slidertable[i2].proc !== 0) {
      stripesTexts.push(
        <div key={i2} className={classes.stripePolsInfoText}>
          {slidertable[i2].pools
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
          POLS
        </div>
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
            <div className={classes.mobileTierShow}>
              <div className={classes.mobileIMG}>
                <Image src={tierList[youAreOn].img} alt=""></Image>
              </div>
              <Typography className={classes.mobileTierName}>
                {tierList[youAreOn].name}
              </Typography>
              <Typography className={classes.mobileTierDesc}>
                {tierList[youAreOn].pools
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                + POLS
              </Typography>

              <Typography className={classes.mobileYourPools}>
                Your POLS:
              </Typography>
              <Typography className={classes.mobileYourPools2}>
                {numberOfTiers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </Typography>
            </div>
            <div className={classes.bottomRightTiersSection}>
              <div
                className={classes.bottomPolsInfo}
                ref={polsTextRef}
                style={{
                  marginLeft: `calc(${countWidthToAdd}px - ${
                    width / 2
                  }px + 21px)`,
                }}
              >
                <Typography className={classes.bottomPolsText}>
                  {numberOfTiers
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </Typography>
                <div className={classes.triangleImg}>
                  <Image src={triangle} alt=""></Image>
                </div>
              </div>
              <div className={classes.bottomPolsLine}>
                <div
                  className={classes.filledTierListLine}
                  style={{ width: `${countWidthToAdd}px` }}
                ></div>
                <div
                  className={classes.filledTierCircle}
                  style={{ marginLeft: `calc(${countWidthToAdd}px - 16px)` }}
                ></div>
              </div>
              <div className={classes.stripesDiv}>{stripes}</div>
              <div className={classes.stripesTextsDiv}>{stripesTexts}</div>
              <div className={classes.bottomButtonsDiv}>
                <Button variant="contained" className={classes.stakeBtn}>
                  <Typography>Stake $CROX</Typography>
                </Button>
                <Button variant="contained" className={classes.buyCroxBtn}>
                  <Typography>Buy More $CROX</Typography>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tiers;
