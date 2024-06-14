import {Footer, Header, HeaderLogo, LayoutComponent, Main, NavContainer, StyledNavLink} from "./styles";
import {LayoutProps} from "./types";
import {Link} from "react-router-dom";


function Layout({children}: LayoutProps) {
    return (
        <LayoutComponent>

            <Header>

                <Link to='/'>
                    <HeaderLogo
                        src='https://cdn.iz.ru/sites/default/files/styles/900x600/public/photo_item-2022-10/1666271042.jpg?itok=e04DvWrq'/>
                </Link>

                <NavContainer>
                    <StyledNavLink to='/' style={({isActive}) =>
                        ({textDecoration: isActive ? 'underline' : 'none'})}>Home</StyledNavLink>


                    <StyledNavLink to='/users' style={({isActive}) =>
                        ({textDecoration: isActive ? 'underline' : 'none'})}>Users</StyledNavLink>
                </NavContainer>
            </Header>
            <Main>{children}</Main>
            <Footer>
                <HeaderLogo
                    src='https://cdn.iz.ru/sites/default/files/styles/900x600/public/photo_item-2022-10/1666271042.jpg?itok=e04DvWrq'/>
            </Footer>


        </LayoutComponent>


    )

}

export default Layout