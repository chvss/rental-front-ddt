import Vue from 'vue';

function errorNotify(text, title = 'Ошибка', type = 'error') {
    Vue.notify({
        group: 'common',
        type: type,
        title: title,
        text: text,
    });
}

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
                });
        });
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
                });
        });
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
            errorNotify('Не удалось получить данные о пользователе');
            console.log(error);
        });
    },
    async updateUserProfile(ctx, user) {
        Vue.axios.put('/auth/user/', user).then(res => {
            ctx.commit('set_user', res.data);
        }).catch(error => {
            errorNotify('Ошибка при обновлении информации о пользователе');
            console.log(error);
        });
    },
};
