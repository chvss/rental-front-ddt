import CompanyApi from '../../api/methods/company';

export default {
    clearState({commit}) {
        commit('clear');
    },
    setOffersList({commit}, data) {
        commit('setOffersList',data);
    },
    setReservationList({commit}, data) {
        commit('setReservationList', data);
    },
    async fetchReservationsByRentalId({commit}, id) {
        const {errors, data} = await CompanyApi.GetReservationsListByRentalId(id);
        if (errors) {
            commit('setErrors', errors);
            return;
        }
        commit('setReservationList', data);
    }
};