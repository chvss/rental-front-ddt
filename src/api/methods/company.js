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

    @Format
    UpdateCompany(id, params) {
        return axios.put('/company/' + id + '/', params);
    }
}

export default new CompanyApi();
