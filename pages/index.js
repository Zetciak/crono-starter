//Imports
import TotalCroxPower from '../components/TotalCroxPower';
import BuySellCrox from '../components/BuySellCrox';
import Tiers from '../components/Tiers';
import ApplicationsTable from '../components/ApplicationsTable';
import DepositTable from '../components/DepositTable';

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
      <ApplicationsTable />
      <DepositTable />
    </>
  );
}

export default HomePage;
