import Axios from 'axios'

const api = Axios.create({
  baseURL: 'https://navedex-api.herokuapp.com/v1'
})

export default api