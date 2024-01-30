import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyAu1-XcNaziyOadnyLhhVQACcmwLe_WRYs'
    }
})

export default authApi



