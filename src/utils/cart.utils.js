export const saveCart = cart => localStorage.setItem('strapi_cart', JSON.stringify(cart))
export const getCart = () => JSON.parse(localStorage.strapi_cart)