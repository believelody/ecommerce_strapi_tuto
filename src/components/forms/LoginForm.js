import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Box, Heading, Text, Label, Button } from 'gestalt'
import FieldInput from '../input/FieldInput'
import { useAppHooks } from '../../contexts'
import isEmpty from '../../utils/isEmpty'
import { ERROR_AUTH, RESET_ERROR, SUCCESS_AUTH } from '../../reducers/authReducer'
import { SET_TOAST } from '../../reducers/toastReducer'
import { OPEN_MODAL } from '../../reducers/modalReducer'
import { SET_LOADING, RESET_LOADING } from '../../reducers/loadingReducer'
import api from '../../api'
import { navigate } from '@reach/router'
import { setToken } from '../../utils/token.utils'

const LoginFormStyle = styled.form`
    display: inline-block;
    text-align: center;
    max-width: 450;
`

const LoginForm = () => {
    const { useAuth, useToast, useModal, useLoading } = useAppHooks()
    const [{ user, errors }, dispatchAuth] = useAuth
    const [toastState, dispatchToast] = useToast
    const [modalState, dispatchModal] = useModal
    const [{ loading }, dispatchLoading] = useLoading

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = e => setEmail(e.value)
    const handlePassword = e => setPassword(e.value)

    const submition = async () => {
        try {
            const res = await api.user.login(email, password)
            dispatchAuth({
                type: SUCCESS_AUTH,
                payload: {
                    user: { _id: res.user._id, name: res.user.username, email: res.user.email }
                }
            })
            setToken(res.jwt)
            dispatchToast({ type: SET_TOAST, payload: { msg: `Welcome ${res.user.username}` } })
            setEmail('')
            setPassword('')
            navigate('/')
        } catch (error) {
            console.log(error)
            dispatchAuth({ type: ERROR_AUTH, payload: { auth_failed: 'there is an error' } })
        }
        dispatchLoading({ type: RESET_LOADING })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatchAuth({ type: RESET_ERROR })
        if (isEmpty(email)) {
            dispatchAuth({ type: ERROR_AUTH, payload: { email: 'email is required' } })
        }
        else if (isEmpty(password)) {
            dispatchAuth({ type: ERROR_AUTH, payload: { password: 'password is required' } })
        }
        else {
            dispatchLoading({ type: SET_LOADING })
            submition()
        }
    }

    useEffect(() => {
        if (errors && errors.auth_failed) {
            dispatchModal({ type: OPEN_MODAL, payload: { msg: errors.auth_failed } })
        }
    }, [errors])

    return (
        <Box
            dangerouslySetInlineStyle={{
                __style: {
                    backgroundColor: '#d6a3b1'
                }
            }}
            margin={4}
            padding={5}
            shape='rounded'
            display='flex'
            justifyContent='center'
        >
            <LoginFormStyle onSubmit={handleSubmit}>
                <Box marginBottom={2} display='flex' direction='column' alignItems='center'>
                    <Heading color='midnight'>Welcome to our store</Heading>
                    <Text italic color='orchid'>Sign in to order some brews!</Text>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='between' paddingY={2}>
                    <Label htmlFor='email'>
                        <Text>Email</Text>
                    </Label>
                    <FieldInput
                        id='email'
                        type='email'
                        name='email'
                        value={email}
                        placeholder='Enter your Email. Ex: prenom@messagerie.com'
                        handleChange={handleEmail}
                        error={!!errors && errors.email}
                    />
                </Box>
                <Box display='flex' alignItems='center' justifyContent='between' paddingY={2}>
                    <Label htmlFor='password'>
                        <Text>Password</Text>
                    </Label>
                    <FieldInput
                        id='password'
                        type='password'
                        name='password'
                        value={password}
                        placeholder='Enter your Password'
                        handleChange={handlePassword}
                        error={!!errors && errors.password}
                    />
                </Box>
                <Box paddingY={2}>
                    <Button disabled={loading} type='submit' text='Sign In' color='blue' />
                </Box>
            </LoginFormStyle>
        </Box>
    )
}

export default LoginForm
