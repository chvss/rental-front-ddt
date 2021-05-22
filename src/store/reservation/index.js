import state from './state';
import actions from './actions';
import mutations from './mutations';

const Reservation = {
    namespaced: true,
    state,
    actions,
    mutations
};

export default Reservation;