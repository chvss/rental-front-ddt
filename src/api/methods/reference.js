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
}

export default new ReferenceApi();