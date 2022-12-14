import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

interface INaveLinkProps {
  handleClose?: () => void;
}

const Anchor = styled.a`
  display: block;
  cursor: pointer;
`;

const NavLink: FunctionComponent<INaveLinkProps> = ({
  handleClose = () => {},
}) => {
  return (
    <ul onClick={handleClose}>
      <li>
        <Link href="/">
          <Anchor>Home</Anchor>
        </Link>
      </li>
      <li>
        <Link href="/career">
          <Anchor>Career</Anchor>
        </Link>
      </li>
      <li>
        <Link href="/work">
          <Anchor>Work</Anchor>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <Anchor>About</Anchor>
        </Link>
      </li>
    </ul>
  );
};

export default NavLink;
