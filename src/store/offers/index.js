import state from './state';
import actions from './actions';
import mutations from './mutations';

const Offers = {
    namespaced: true,
    state,
    actions,
    mutations
};

export default Offers;