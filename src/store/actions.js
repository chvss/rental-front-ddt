import Vue from 'vue';

export default {
    login({commit}, user) {
        return new Promise((resolve, reject) => {
            Vue.axios({url: '/auth/login/', data: user, method: 'POST'})
                .then(resp => {
                    const token = resp.data.key;
                    localStorage.setItem('token', token);
                    Vue.axios.defaults.headers.common['Authorization'] = token;
                    commit('auth_success', token);
                    resolve(resp);
                })
                .catch(err => {
                    commit('auth_error');
                    localStorage.removeItem('token');
                    reject(err);
                })
        })
    },
    register({commit}, user) {
        return new Promise((resolve, reject) => {
            Vue.axios({url: '/rest-auth/register/', data: user, method: 'POST'})
                .then(resp => {
                    const token = resp.data.token;
                    const user = resp.data.user;
                    localStorage.setItem('token', token);
                    Vue.axios.defaults.headers.common['Authorization'] = token;
                    commit('auth_success', token, user);
                    resolve(resp);
                })
                .catch(err => {
                    commit('auth_error', err);
                    localStorage.removeItem('token');
                    reject(err);
                })
        })
    },
    logout({commit}) {
        return new Promise((resolve) => {
            commit('logout');
            localStorage.removeItem('token');
            delete Vue.axios.defaults.headers.common['Authorization'];
            resolve();
        })
    },
    async fetchUser(ctx) {
        Vue.axios.get('/auth/user/').then(res => {
            ctx.commit('set_user', res.data)
        }).catch(error => {
            // errorNotify('Ошибка получения пользователя');
            console.log(error);
        });
    },
}
