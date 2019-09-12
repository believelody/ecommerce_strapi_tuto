import React, { useEffect } from 'react'
import { Box, Button, Text } from 'gestalt'
import styled from 'styled-components'
import NavItem from './NavItem';
import { useAppHooks } from '../../contexts';
import { LOG_OUT, SUCCESS_AUTH } from '../../reducers/authReducer';
import { getToken, resetToken } from '../../utils/token.utils';
import { getUser, resetUser } from '../../utils/user.utils';

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
    const { useAuth } = useAppHooks()
    const [{isConnected}, dispatchAuth] = useAuth

    const logout = e => {
        resetUser()
        resetToken()
        dispatchAuth({ type: LOG_OUT })
    }

    useEffect(() => {
        if (getToken()) {
            dispatchAuth({ 
                type: SUCCESS_AUTH,
                payload: {
                    user: getUser()
                }
            })
        }
    }, [getToken, getUser])

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
        {
            isConnected ?
            <React.Fragment>
                <NavItem path='/' content='Home' />
                <NavItem path='/cart' content='Cart' />
                <Box width={200} color='gray' padding={2}>
                    <Button color='transparent' textColor='white' text='Logout' onClick={logout} />
                </Box>
            </React.Fragment> :
            <React.Fragment>
                <NavItem path='/login' content='Sign In' />
                <NavItem path='/register' content='Sign Up' />
            </React.Fragment>
            }
    </Box>
  )
}

export default Navbar
