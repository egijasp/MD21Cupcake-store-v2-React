import './NavLinks.scss';
import { FC } from 'react';

type NavLinksProps = {
  linkName: string,
  href?: string,
}

const NavLinks: FC<NavLinksProps> = ({ linkName, href }) => (
  <a className="nav__links" href={href}>{linkName}</a>
);

export default NavLinks;
