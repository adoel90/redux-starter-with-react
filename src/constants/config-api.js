// export const URL_API = 'http://localhost:5000';
import axios from 'axios'

function createApi () {
    return axios.create({
      baseUrl: 'http://localhost:5000/api'
    })
}

export const URL_API = createApi();