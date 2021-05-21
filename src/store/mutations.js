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
        state.user = user;
    },
}
