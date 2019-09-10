import React from 'react'
import { Link } from '@reach/router'
import { Text } from 'gestalt'
import styled from 'styled-components'

const NavLink = styled(Link)`
    background-color: red;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 500ms ease;
`

const NavItem = ({ content, path }) => {
  return (
    <NavLink 
        to={path}
        getProps={({isCurrent}) => ({style: { backgroundColor: isCurrent ? 'crimson' : 'transparent' }})}
    >
        <Text size='xl' color='white'>{content}</Text>
    </NavLink>
  )
}

export default NavItem
