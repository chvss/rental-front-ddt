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

    @Format
    GetOfferList() {
        return axios.get('/offer/');
    }

    @Format
    GetOffersByRental(id) {
        return axios.get(`/company/rental_points/${id}/offers/`);
    }

    @Format
    CreateReservation(id, data) {
        return axios.post(`/offer/${id}/reservation/`, data);
    }

    @Format
    GetReservationByOfferId(id) {
        return axios.get(`/offer/${id}/reservation/`);
    }
}

export default new OfferApi();