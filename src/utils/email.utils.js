import api from '../api';

export default async (key, data) => {
  try {
    return await api[key].sendOrderEmail(data)
  }
  catch(e) {
    console.log(e)
    return null
  }
}
