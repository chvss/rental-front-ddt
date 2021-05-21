export default {
    authStatus: '',
    token: localStorage.getItem('token') || '',
    user: {
        firstname: null,
        secondname: null,
        email: null,
        phone: null,
        city: null,
    },
    companies: [],
};
