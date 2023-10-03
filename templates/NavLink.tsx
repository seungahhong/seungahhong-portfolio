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

const NavLink: FunctionComponent<INaveLinkProps> = ({
  handleClose = () => {},
}) => {
  return (
    <ul onClick={handleClose}>
      <li>
        <Anchor href="/" aria-label="home-link">
          Home
        </Anchor>
      </li>
      <li>
        <Anchor href="/career" aria-label="career-link">
          Career
        </Anchor>
      </li>
      <li>
        <Anchor href="/work" aria-label="work-link">
          Work
        </Anchor>
      </li>
      <li>
        <Anchor href="/about" aria-label="about-link">
          About
        </Anchor>
      </li>
    </ul>
  );
};

export default NavLink;
