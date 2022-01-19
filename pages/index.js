//Imports
import TotalCroxPower from '../components/TotalCroxPower';
import BuySellCrox from '../components/BuySellCrox';
import Tiers from '../components/Tiers';

//CSS
import useStyles from '../styles/pages/IndexStyle';

//Script
function HomePage() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.mainFirstGrid}>
        <TotalCroxPower />
        <BuySellCrox />
      </div>
      <Tiers />
    </>
  );
}

export default HomePage;
