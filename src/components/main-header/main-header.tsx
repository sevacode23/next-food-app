import Link from 'next/link';
import Image from 'next/image';

import logoImg from '@/assets/logo.png';

import { NavLink } from '../nav-link';

import classes from './main-header.module.scss';

export const MainHeader = () => (
  <header className={classes.header}>
    <Link className={classes.logo} href="/">
      <Image src={logoImg} alt="A palette of food" priority />
    </Link>

    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink href="/meals">Browse Meals</NavLink>
        </li>

        <li>
          <NavLink href="/community">Foodies Community</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
