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
          <Anchor aria-label="home-link">Home</Anchor>
        </Link>
      </li>
      <li>
        <Link href="/career">
          <Anchor aria-label="career-link">Career</Anchor>
        </Link>
      </li>
      <li>
        <Link href="/work">
          <Anchor aria-label="work-link">Work</Anchor>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <Anchor aria-label="about-link">About</Anchor>
        </Link>
      </li>
    </ul>
  );
};

export default NavLink;
