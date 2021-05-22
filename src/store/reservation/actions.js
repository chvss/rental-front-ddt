export default {
    setFromDate({commit}, data) {
        commit('setFromDate', data);
    },
    setToDate({commit}, data) {
        commit('setToDate', data);
    },
    setCount({commit}, data) {
        commit('setCount', data);
    }
};