import styled from '@emotion/styled';
import {NavLink} from "react-router-dom";

export const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background: #06006F;
  color: white;
`


export const StyledNavLink = styled(NavLink)`

text-decoration: none;
    font-size: 20px;
    color: white;



`

export const HeaderLogo = styled.img`
  width: 50px;
  height: 50px;
`

export const NavContainer = styled.nav`
  display: flex;
  gap: 10px;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const Footer = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px;
  background: #06006F;
  color: white;
`