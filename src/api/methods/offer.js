import axios from 'axios';
import Format from '../format';

class OfferApi {

    @Format
    CreateOffer(params) {
        return axios.post('/offer/', params);
    }

    @Format
    GetOfferById(id) {
        return axios.get(`/offer/${id}/`);
    }
}

export default new OfferApi();