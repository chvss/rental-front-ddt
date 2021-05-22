export default {
    isLoggedIn: state => !!state.token,
    isBusiness: state => !!state.user.company.id,
    authUser: state => state.user,
};
