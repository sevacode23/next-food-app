'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import classes from './nav-link.module.scss';

interface IProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink = (props: IProps) => {
  const { href, children } = props;

  const path = usePathname();

  const isActive = path === href;

  return (
    <Link
      href={href}
      className={`${classes.root} ${isActive ? classes.active : ''}`}
    >
      {children}
    </Link>
  );
};
