import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Box, Heading, Text, Label, Button } from 'gestalt'
import FieldInput from '../input/FieldInput'
import { useAppHooks } from '../../contexts'

const RegisterFormStyle = styled.form`
    display: inline-block;
    text-align: center;
    max-width: 450;
`

const RegisterForm = () => {
    const { useAuth } = useAppHooks()
    const [{user, errors}, dispatchAuth] = useAuth

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleName = e => setName(e.value)
    const handleEmail = e => setEmail(e.value)
    const handlePassword = e => setPassword(e.value)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

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
                />
            </Box>
            <Box paddingY={2}>
                <Button text='Sign Up' color='blue' />
            </Box>
        </RegisterFormStyle>
    </Box>
  )
}

export default RegisterForm
