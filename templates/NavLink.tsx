import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

interface INaveLinkProps {
  handleClose?: () => void;
}

const Anchor = styled(Link)`
  display: block;
  cursor: pointer;
`;

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
}) => {
  return (
    <ul onClick={handleClose}>
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
};

export default NavLink;
