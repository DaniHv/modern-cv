import styled from 'styled-components';

export const Navbar = styled.nav`
  position: absolute;
  z-index: 10;
  color: white;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px 25px;
`;

export const NavSection = styled.div`
  display: flex;
`;

export const NavItem = styled.li`
  text-transform: uppercase;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 5px;

  a {
    color: white;
  }

  &.active {
    font-weight: 700;
  }
`;
