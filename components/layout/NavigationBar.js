//Imports
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

//Images
import logo from '../../public/images/logo.svg';

//Icons
import MenuIcon from '@material-ui/icons/MenuRounded';

//CSS
import useStyles from '../../styles/components/layout/NavigationBarStyle';

//Script
function NavigationBar() {
  //Styles
  const classes = useStyles();

  //Nav responsive
  const [showNav, setNavVisible] = useState(false);
  const [screenW, setScreenW] = useState(window.innerWidth);

  function changeNavVisible() {
    setNavVisible(!showNav);
  }

  useEffect(() => {
    function changeWidth() {
      setScreenW(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <>
      <header>
        <nav>
          <AppBar className={classes.appBar} elevation={0}>
            <Toolbar>
              <div className={classes.logo}>
                <Image src={logo} alt="Logo" />
              </div>
              {(showNav || screenW > 900) && (
                <div className={classes.navigationTypography}>
                  <ul>
                    <li onClick={changeNavVisible}>
                      <Link href="/">Main Page</Link>
                    </li>
                    <li onClick={changeNavVisible}>
                      <Link href="#">Projects</Link>
                    </li>
                    <li onClick={changeNavVisible}>
                      <Link href="#">Allocations</Link>
                    </li>
                    <li onClick={changeNavVisible}>
                      <Link href="#">Dashboard</Link>
                    </li>
                    <li onClick={changeNavVisible}>
                      <Link href="#">Buy $CROX</Link>
                    </li>
                    <li onClick={changeNavVisible}>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              )}
              <MenuIcon
                className={classes.navBurger}
                onClick={changeNavVisible}
              />
            </Toolbar>
          </AppBar>
        </nav>
      </header>
    </>
  );
}

export default NavigationBar;
