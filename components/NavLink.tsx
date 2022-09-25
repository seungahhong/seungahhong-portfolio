import { FunctionComponent } from 'react';
import Link from 'next/link';

interface INaveLinkProps {
  handleClose?: () => void;
}

const NavLink: FunctionComponent<INaveLinkProps> = ({
  handleClose = () => {},
}) => {
  return (
    <ul onClick={handleClose}>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/company">
          <a>Company</a>
        </Link>
      </li>
      <li>
        <Link href="/works">
          <a>Works</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  );
};

export default NavLink;
