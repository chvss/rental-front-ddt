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
    GetCompanies() {
        return axios.get('/company/board/');
    }

    @Format
    UpdateCompany(id, params) {
        return axios.put(`/company/${id}/`, params);
    }

    @Format
    RentalCreate(id, params) {
        return axios.post(`/company/${id}/rental_points/`, params);
    }

    @Format
    RentalUpdate(id, params) {
        return axios.put(`/company/${id}/rental_points/${params.id}/`, params);
    }

    @Format
    Rentals(id) {
        return axios.get(`/company/${id}/rental_points/`);
    }

    @Format
    AllRentals() {
        return axios.get('/company/rental_points/all/');
    }

    @Format
    RentalById(id) {
        return axios.get(`/company/rental_points/detail/${id}/`);
    }
}

export default new CompanyApi();
