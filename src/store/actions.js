import Vue from 'vue';
import AuthApi from '../api/methods/auth';
import CompanyApi from '../api/methods/company';

function errorNotify(text, title = 'Ошибка', type = 'error') {
    Vue.notify({
        group: 'common',
        type: type,
        title: title,
        text: text,
    });
}

export default {
    // ****************************************************   USER   ***************************************************
    async login({commit}, user) {
        const {data, errors} = await AuthApi.Login(user);
        if (errors) {
            commit('auth_error');
            localStorage.removeItem('token');
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
    async logout({commit}) {
        return new Promise((resolve) => {
            commit('logout');
            localStorage.removeItem('token');
            delete Vue.axios.defaults.headers.common['Authorization'];
            resolve();
        });
    },
    async fetchUser({commit}) {
        const {data, errors} = await AuthApi.FetchUser();
        console.log(data);
        if (errors) {
            errorNotify('Не удалось получить данные о пользователе');
            console.log(errors);
            return false;
        }
        commit('set_user', data);
        return true;
    },
    async updateUserProfile({commit}, user) {
        const {data, errors} = await AuthApi.UpdateUserProfile(user);
        if (errors) {
            errorNotify('Ошибка при обновлении информации о пользователе');
            console.log(errors);
            return false;
        }
        commit('set_user', data);
        return true;
    },

    // ***************************************************   COMPANY   *************************************************
    async createBusinessAccount({commit}, data) {
        const {errors} = await CompanyApi.CreateBusinessAccount(data);
        if (errors) {
            console.log(errors);
            commit('setErrors', errors);
        }
    },
    async getCompany({commit}) {
        const {data, errors} = await CompanyApi.GetCompany();
        if (errors) {
            console.log(errors);
            return false;
        }
        commit('setUserCompany', data);
        return true;
    },
    async updateCompany({commit}, company) {
        const {data, errors} = await CompanyApi.UpdateCompany(this.state.user.company.id, company);
        if (errors) {
            console.log(errors);
            return false;
        }
        commit('setUserCompany', data);
        return true;
    }
};
