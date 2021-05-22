import OfferApi from '../../api/methods/offer';

export default {
    setFromDate({commit}, data) {
        commit('setFromDate', data);
    },
    setToDate({commit}, data) {
        commit('setToDate', data);
    },
    setFromTime({commit}, data) {
        commit('setFromTime', data);
    },
    setToTime({commit}, data) {
        commit('setToTime', data);
    },
    setCount({commit}, data) {
        commit('setCount', data);
    },
    clear({commit}) {
        commit('clear');
    },
    async createReservation({commit}, {id, data}) {
        const {errors} = await OfferApi.CreateReservation(id, data);
        if (errors) {
            commit('setErrors', errors);
        }
    }
};