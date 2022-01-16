//Imports
import TotalCroxPower from '../components/TotalCroxPower';
import BuySellCrox from '../components/BuySellCrox';

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
    </>
  );
}

export default HomePage;
