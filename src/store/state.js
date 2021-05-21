export default {
    authStatus: '',
    token: localStorage.getItem('token') || '',
    user: {
        firstname: null,
        lastname: null,
        email: null,
        phone: null,
        city: null,
        company: {}
    },
    companies: [],
    errors: {}
};
