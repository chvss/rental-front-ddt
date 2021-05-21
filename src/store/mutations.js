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
    },
};
