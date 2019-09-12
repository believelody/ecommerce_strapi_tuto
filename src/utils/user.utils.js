export const setUser = user => {
    localStorage.setItem('strapi_user', JSON.stringify(user))
}

export const getUser = () => localStorage.getItem('strapi_user')

export const resetUser = () => localStorage.removeItem('strapi_user')