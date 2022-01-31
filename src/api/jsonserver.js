import axios from 'axios'

export default axios.create({
    baseURL: 'http://127.0.0.1:149/'
    //baseURL: 'http://c2bf-105-112-51-240.ngrok.io'
})