import OfferApi from '../../api/methods/offer';
import ReferenceApi from '../../api/methods/reference';

export default {
    async createOffer({commit}, newOffer) {
        const data = {
            description: newOffer.description,
            count: newOffer.count,
            is_for_child: newOffer.isForChild,
            is_female: newOffer.isFemale,
            is_male: newOffer.isMale,
            is_unisex: newOffer.isUnisex,
            product: newOffer.selectedProductId,
            rental_point: newOffer.selectedRentalPointId,
        };
        const bodyFormData = new FormData();
        bodyFormData.append('data', JSON.stringify(data));
        const {errors} = await OfferApi.CreateOffer(bodyFormData);
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
        commit('setCount', data);
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
    setSelectedRentalPointId({ commit }, {value, rentalPointList}) {
        const {id} = ((rentalPointList || []).find(item => item.address.address === value) || {});
        commit('setSelectedRentalPointId', id);
    },

    async fetchOffersList({commit}) {
        const {data, errors} = await OfferApi.GetOfferList();
        if (errors) {
            commit('setErrors', errors);
        }
        if (data.length) {
            commit('setOffersList', data);
        }
    }
};