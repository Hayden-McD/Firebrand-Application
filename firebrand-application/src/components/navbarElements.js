import React from 'react'
import {
    Navbar,
    NavbarBrand,
    NavItem,
    Nav,
    NavLink
} from 'reactstrap';

const NavigationBar = () => {
    return (
        <Navbar color="dark">
            <Nav >
                <NavLink style={{ color: "#FFF", fontSize: "1.5rem" }} href="/">About me</NavLink>
                <NavItem>
                    <NavLink style={{ color: "#FFF", fontSize: "1.5rem" }} href="/study/">My study</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ color: "#FFF", fontSize: "1.5rem" }} href="/skills/">Skills and attributes</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ color: "#FFF", fontSize: "1.5rem" }} href="/why/">Why I want the internship</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ color: "#FFF", fontSize: "1.5rem" }} href="/what/">What I hope to achieve</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default NavigationBar