import { FunctionComponent } from 'react';
import Link from 'next/link';

interface INaveLinkProps {
  handleClose?: () => void;
}

const LinkItems = [
  {
    href: '/',
    label: 'Home Link',
    value: 'Home',
  },
  {
    href: '/career',
    label: 'Career Link',
    value: 'Career',
  },
  {
    href: '/work',
    label: 'Work Link',
    value: 'Work',
  },
  {
    href: '/about',
    label: 'About Link',
    value: 'About',
  },
];

const NavLink: FunctionComponent<INaveLinkProps> = ({
  handleClose = () => {},
}) => (
  <ul role="presentation" onClick={handleClose}>
    {LinkItems.map((item, index) => (
      <li key={`NavLink_${index}`}>
        <Link
          className="block cursor-pointer"
          href={item.href}
          aria-label={item.label}
        >
          {item.value}
        </Link>
      </li>
    ))}
  </ul>
);

export default NavLink;
