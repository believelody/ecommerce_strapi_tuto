export const setToken = token => {
    localStorage.setItem('strapi_token', token)
    localStorage.removeItem('jwt')
}

export const getToken = () => localStorage.getItem('strapi_token')

export const resetToken = () => localStorage.removeItem('strapi_token')