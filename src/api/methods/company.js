import axios from 'axios';
import Format from '../format';

class CompanyApi {
    @Format
    CreateBusinessAccount(params) {
        return axios.post('/company/', params);
    }

    @Format
    GetCompany() {
        return axios.get('/company/');
    }
}

export default new CompanyApi();