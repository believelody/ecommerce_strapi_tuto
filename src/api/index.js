import axios from "axios"
import brand from './brand'
import brew from './brew'
import user from './user'
import Strapi from 'strapi-sdk-javascript'

export const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:1337'
const strapi = new Strapi(apiUrl)

// export const post = data => axios.post(`${apiUrl}/graphql`, data)
export const post = obj => strapi.request('POST', '/graphql', { data: obj })
export const register = (name, email, password) => strapi.register(name, email, password)
export const login = (email, password) => strapi.login(email, password)

export default { brand, brew, user }