import axios from "axios"
import brand from './brand'
import brew from './brew'
import user from './user'
import order from './order'
import Strapi from 'strapi-sdk-javascript'

export const apiUrl = process.env.NODE_ENV === 'production' ? process.env.API_URL : 'http://localhost:1337'
export const strapi = new Strapi(apiUrl)

// export const post = data => axios.post(`${apiUrl}/graphql`, data)
export const post = obj => strapi.request('POST', '/graphql', { data: obj })
export const register = (name, email, password) => strapi.register(name, email, password)
export const login = (email, password) => strapi.login(email, password)
export const create = (path, data) => strapi.createEntry(path, data)
export const send = obj => strapi.request('POST', '/email', {data: obj})

export default { brand, brew, user, order }
