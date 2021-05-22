export default {
    auth_success(state, token) {
        state.authStatus = 'success';
        state.token = token;
    },
    auth_error(state) {
        state.authStatus = 'error';
    },
    logout(state) {
        state.status = '';
        state.token = '';
    },
    set_user(state, user) {
        state.user.firstname = user.first_name;
        state.user.lastname = user.last_name;
        state.user.email = user.email;
        state.user.phone = user.phone;
        state.user.city = user.city;

        state.user.company.id = user.company.id;
        state.user.company.name = user.company.name;
        state.user.company.description = user.company.description;
    },
    setUserCompany(state, data) {
        state.user.company = data;
    },
    setErrors(state, data) {
        state.errors = data;
    },
    clearErrors(state) {
        state.errors = {};
    }
};
