import { LayoutProps } from "./types"
import {
    LayoutWrapper,
    Header,
    HeaderLogoContainer,
    HeaderLogo,
    NavContainer,
    Main,
    Footer,
    StyledNavLink,
    StyledLink,
    FooterNavContainer,
} from "./styles"
function Layout({ children }: LayoutProps) {

    return (
        <LayoutWrapper>
            <Header>
                <HeaderLogoContainer>
                    <HeaderLogo src='https://cdn.iz.ru/sites/default/files/styles/900x600/public/photo_item-2022-10/1666271042.jpg?itok=e04DvWrq' />
                </HeaderLogoContainer>
                <NavContainer>
                    <StyledNavLink
                        style={({ isActive }) => ({
                            textDecoration: isActive ? "underline" : "none",
                        })}
                        to="/"
                    >
                        Home
                    </StyledNavLink>
                    <StyledNavLink
                        style={({ isActive }) => ({
                            textDecoration: isActive ? "underline" : "none",
                        })}
                        to="/users"
                    >
                        Users
                    </StyledNavLink>
                </NavContainer>
            </Header>
            <Main>{children}</Main>
            <Footer>
                <HeaderLogoContainer >
                    <HeaderLogo src='https://cdn.iz.ru/sites/default/files/styles/900x600/public/photo_item-2022-10/1666271042.jpg?itok=e04DvWrq' />
                </HeaderLogoContainer>
                <FooterNavContainer>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/users">Users</StyledLink>
                </FooterNavContainer>
            </Footer>
        </LayoutWrapper>
    )
}

export default Layout