import axios from 'axios';
import Format from '../format';

class ReferenceApi {
    @Format
    GetCategoryList() {
        return axios.get('/reference/category/');
    }

    @Format
    GetProductsByCategoryId(id) {
        return axios.get(`/reference/category/${id}/product/`);
    }

    @Format
    Cities() {
        return axios.get('/reference/city/');
    }
}

export default new ReferenceApi();