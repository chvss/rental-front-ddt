import actions from './actions';
import mutations from './mutations';
import state from './state';


const RentalControl = {
    namespaced: true,
    state,
    actions,
    mutations
};

export default RentalControl;