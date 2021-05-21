export default {
    isLoggedIn: state => !!state.token,
    authUser: state => state.user,
}
