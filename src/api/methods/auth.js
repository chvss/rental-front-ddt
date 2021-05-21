import axios from 'axios';
import Format from '../format';

class AuthApi {

    @Format
    Login(params) {
        return axios.post('/auth/login/', params);
    }

    @Format
    Register(params) {
        return axios.post('/rest-auth/register/', params);
    }
}

export default new AuthApi();