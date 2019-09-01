import React from 'react'
import { Box } from 'gestalt'
import styled from 'styled-components'
import NavItem from './NavItem';

const NavbarStyle = styled.nav`
    .nav-list {
        display: flex;
        width: 100%;
        height: 60px;

        & > li {
            margin: 0 15px;
        }
    }
`

const Navbar = () => {
return (
    <Box 
        height={60} 
        color="midnight" 
        display='flex'
        alignItems='center'
        justifyContent='around'
        shape='roundedBottom'
        margin={0}
        padding={0}
        flex='grow'
    >
        <NavItem path='/' content='Home' />
        <NavItem path='/login' content='Sign In' />
        <NavItem path='/register' content='Sign Up' />
        <NavItem path='/checkout' content='Checkout' />
    </Box>
  )
}

export default Navbar
