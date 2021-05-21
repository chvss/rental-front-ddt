export default {
    auth_success(state, token, user) {
        state.authStatus = 'success';
        state.token = token;
        state.user = user;
    },
    auth_error(state) {
        state.authStatus = 'error';
    },
    logout(state) {
        state.status = '';
        state.token = '';
    },
}
