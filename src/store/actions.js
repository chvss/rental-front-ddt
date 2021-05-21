import Vue from 'vue';
import AuthApi from '../api/methods/auth';

export default {
    async login({commit}, user) {
        const { data, errors } = await AuthApi.Login(user);
        console.log(data, errors);
        if (errors) {
            commit('auth_error');
            localStorage.removeItem('token');
            console.log(errors);
            return false;
        }
        const token = data.key;
        localStorage.setItem('token', token);
        Vue.axios.defaults.headers.common['Authorization'] = token;
        commit('auth_success', token);
        return true;
    },
    async register({commit}, user) {
        const {data, errors} = await AuthApi.Register(user);
        if (errors) {
            commit('auth_error', errors);
            localStorage.removeItem('token');
            return false;
        }
        const token = data.token;
        localStorage.setItem('token', token);
        Vue.axios.defaults.headers.common['Authorization'] = token;
        commit('auth_success', token, data.user);
        return true;
    },
    logout({commit}) {
        return new Promise((resolve) => {
            commit('logout');
            localStorage.removeItem('token');
            delete Vue.axios.defaults.headers.common['Authorization'];
            resolve();
        });
    },
    async fetchUser(ctx) {
        Vue.axios.get('/auth/user/').then(res => {
            ctx.commit('set_user', res.data);
        }).catch(error => {
            // errorNotify('Ошибка получения пользователя');
            console.log(error);
        });
    },
};
