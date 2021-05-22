export default {
    authSuccess(state, token) {
        state.authStatus = 'success';
        state.token = token;
    },
    authError(state) {
        state.authStatus = 'error';
    },
    logout(state) {
        state.status = '';
        state.token = '';
    },
    setUser(state, user) {
        state.user.firstname = user.first_name;
        state.user.lastname = user.last_name;
        state.user.email = user.email;
        state.user.phone = user.phone;
        state.user.city = user.address
            ? user.address.city
            : null;

        // state.user.company = user.company || {};

        state.user.company.id = user.company
            ? user.company.id
            : null;

        state.user.company.name = user.company
            ? user.company.name
            : null;

        state.user.company.description = user.company
            ? user.company.description
            : null;
    },
    setUserCompany(state, data) {
        state.user.company = data;
    },
    setErrors(state, data) {
        state.errors = data;
    },
    clearErrors(state) {
        state.errors = {};
    },
    setCities(state, cities) {
        state.cities = cities;
    },
    setRentals(state, rentals) {
        state.rentals = rentals;
    },
    setAllRentals(state, allRentals) {
        state.allRentals = allRentals;
    },
    setCompanies(state, companies) {
        state.companies = companies;
    },
    setTypeViewCompanies(state, status) {
        state.typeViewCompanies = status;
    },
    setMarkerRental(state, markerRental) {
        state.markerRental = markerRental;
    },
};
