import { create, send } from './'

export default {
  createOrder: data => create('orders', data),
  sendOrderEmail: data => send(data)
}
