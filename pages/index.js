//Imports
import TotalCroxPower from '../components/TotalCroxPower';
import BuySellCrox from '../components/BuySellCrox';
import Tiers from '../components/Tiers';
import ApplicationsTable from '../components/ApplicationsTable';
import DepositTable from '../components/DepositTable';
import Verification from '../components/Verification';
import Head from 'next/head';

//CSS
import useStyles from '../styles/pages/IndexStyle';

//Script
function HomePage() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>CronoStarter - Index page</title>
      </Head>
      <div className="container">
        <div className={classes.mainFirstGrid}>
          <TotalCroxPower />
          <BuySellCrox />
        </div>
        <Tiers />
        <ApplicationsTable />
        <DepositTable />
      </div>
      <Verification />
    </>
  );
}

export default HomePage;
