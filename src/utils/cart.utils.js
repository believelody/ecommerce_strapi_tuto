export const saveCart = cart => localStorage.setItem('strapi_cart', JSON.stringify(cart))
export const getCart = () => localStorage.getItem('strapi_cart') ? JSON.parse(localStorage.strapi_cart) : null
export const resetCart = () => localStorage.removeItem('strapi_cart')
