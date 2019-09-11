import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Box, Heading, Text, Label, Button } from 'gestalt'
import FieldInput from '../input/FieldInput'
import { useAppHooks } from '../../contexts'
import isEmpty from '../../utils/isEmpty'
import { ERROR_AUTH, RESET_ERROR } from '../../reducers/authReducer'
import { SET_TOAST } from '../../reducers/toastReducer'

const RegisterFormStyle = styled.form`
    display: inline-block;
    text-align: center;
    max-width: 450;
`

const RegisterForm = () => {
    const { useAuth, useToast } = useAppHooks()
    const [{user, errors}, dispatchAuth] = useAuth
    const [toastState, dispatchToast] = useToast

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleName = e => setName(e.value)
    const handleEmail = e => setEmail(e.value)
    const handlePassword = e => setPassword(e.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatchAuth({ type: RESET_ERROR })
        if (isEmpty(name)) {
            dispatchAuth({ type: ERROR_AUTH, payload: {name: 'name is required'} })
        }
        else if (isEmpty(email)) {
            dispatchAuth({ type: ERROR_AUTH, payload: {email: 'email is required'} })
        }
        else if (isEmpty(password)) {
            dispatchAuth({ type: ERROR_AUTH, payload: {password: 'password is required'} })
        }
        else {
            dispatchToast({ type: SET_TOAST, payload: {msg: `Welcome ${name}`} })
        }
    }

    useEffect(() => {
        // console.log(errors)
    }, [errors])

  return (
    <Box
        dangerouslySetInlineStyle={{
            __style: {
                backgroundColor: '#ebe2da'
            }
        }}
        margin={4}
        padding={5}
        shape='rounded'
        display='flex'
        justifyContent='center'
    >
        <RegisterFormStyle onSubmit={handleSubmit}>
            <Box marginBottom={2} display='flex' direction='column' alignItems='center'>
                <Heading color='midnight'>Let's Get Started</Heading>
                <Text italic color='orchid'>Sign up to order some brews!</Text>                
            </Box>
            <Box display='flex' alignItems='center' justifyContent='between' paddingY={2}>
                <Label htmlFor='username'>
                    <Text>Username</Text>
                </Label>
                <FieldInput
                    id='username'
                    type='text'
                    name='username'
                    value={name}
                    placeholder='Enter your Name'
                    handleChange={handleName}
                    error={!!errors && errors.name}
                />
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
                <Button type='submit' text='Sign Up' color='blue' />
            </Box>
        </RegisterFormStyle>
    </Box>
  )
}

export default RegisterForm
