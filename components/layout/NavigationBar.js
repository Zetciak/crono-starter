//Imports
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link';

//Images
import logo from '../../images/logo.svg';

//Icons
import MenuIcon from '@material-ui/icons/MenuRounded';

//CSS
import useStyles from '../../styles/components/layout/NavigationBarStyle';

//Script
function NavigationBar() {
  const classes = useStyles();
  return (
    <>
      <header>
        <nav>
          <AppBar className={classes.appBar} elevation={0}>
            <Toolbar>
              <div className={classes.logo}>
                <Image src={logo} alt="Logo" />
              </div>
              <Typography className={classes.navigationTypography}>
                <ul>
                  <li>
                    <Link href="/">Main Page</Link>
                  </li>
                  <li>
                    <Link href="#">Projects</Link>
                  </li>
                  <li>
                    <Link href="#">Allocations</Link>
                  </li>
                  <li>
                    <Link href="#">Dashboard</Link>
                  </li>
                  <li>
                    <Link href="#">Buy $CROX</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </Typography>
              <MenuIcon className={classes.navBurger} />
            </Toolbar>
          </AppBar>
        </nav>
      </header>
    </>
  );
}

export default NavigationBar;
