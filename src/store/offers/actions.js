import OfferApi from '../../api/methods/offer';
import ReferenceApi from '../../api/methods/reference';

export default {
    async createOffer({commit}, newOffer) {
        const {errors} = await OfferApi.CreateOffer(newOffer);
        if (errors) {
            commit('setErrors', errors);
        }
    },
    async getOfferById({commit}, id) {
        const {data, errors} = await OfferApi.GetOfferById(id);
        if (errors) {
            commit('setErrors', errors);
        }
        commit('setOffer', data);
    },
    changeIsActive({commit}) {
        commit('changeIsActive');
    },
    clearOfferState({commit}) {
        commit('clearOfferState');
    },
    setDescription({commit}, data) {
        commit('setDescription', data);
    },
    setCount({commit}, data) {
        const regex = /^[0-9]+$/;
        if (data.match(regex)) {
            commit('setCount', data);
        }
    },
    changeIsForChild({commit}) {
        commit('changeIsForChild');
    },
    changeIsMale({commit}) {
        commit('changeIsMale');
    },
    changeIsFemale({commit}) {
        commit('changeIsFemale');
    },
    changeIsUnisex({commit}) {
        commit('changeIsUnisex');
    },
    async fetchProductsByCategoryId({commit}, id) {
        const {data, errors} = await ReferenceApi.GetProductsByCategoryId(id);
        if (errors) {
            commit('setErrors', errors);
            return;
        }
        commit('setProductList', data);
    },
    async fetchCategoryList({commit}) {
        const {data, errors} = await ReferenceApi.GetCategoryList();
        if (errors) {
            commit('setErrors', errors);
            return;
        }
        commit('setCategoryList', data);
    },
    setSelectedCategoryId({commit, state}, data) {
        const {id} = state.categoryList.find(item => item.name === data);
        commit('setSelectedCategoryId', id);
    },
    setSelectedProductId({commit, state}, data) {
        const {id} = state.productList.find(item => item.name === data);
        commit('setSelectedProductId', id);
    },
    setSelectedRentalPointId({commit, state}, data) {
        const {id} = state.rentalPointList.find(item => item.address === data);
        commit('setSelectedRentalPointId', id);
    }

};