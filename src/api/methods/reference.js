import axios from 'axios';
import Format from '../format';

class ReferenceApi {

    @Format
    Cities() {
        return axios.get('/reference/city/');
    }

}

export default new ReferenceApi();
