import axios from 'axios'
import Cookies from 'js-cookie'

//    timeout: 5000,
export default axios.create({
    baseURL: '/api',
    timeout: 8000,
    headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken')
    }
})
