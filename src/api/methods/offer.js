import axios from 'axios';
import Format from '../format';

class OfferApi {

    @Format
    CreateOffer(bodyFormData) {
        return axios.post('/offer/', bodyFormData, {headers: { 'Content-Type': 'multipart/form-data' }});
    }

    @Format
    GetOfferById(id) {
        return axios.get(`/offer/${id}/`);
    }
}

export default new OfferApi();