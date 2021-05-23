export default {
    setCurrentOffer(state, data) {
        state.currentOffer = {...data};
    },
    setDescription(state, payload) {
        state.description = payload;
    },
    setCount(state, payload) {
        state.count = payload;
    },
    changeIsForChild(state) {
        state.isForChild = !state.isForChild;
    },
    changeIsMale(state) {
        state.isMale = !state.isMale;
    },
    changeIsFemale(state) {
        state.isFemale = !state.isFemale;
    },
    changeIsUnisex(state) {
        state.isUnisex = !state.isUnisex;
    },
    setProductList(state, data) {
        state.productList = [...data];
    },
    setCategoryList(state, data) {
        state.categoryList = [...data];
    },
    setSelectedCategoryId(state, data) {
        state.selectedCategoryId = data;
    },
    setSelectedProductId(state, data) {
        state.selectedProductId = data;
    },
    setSelectedRentalPointId(state, data) {
        state.selectedRentalPointId = data;
    },
    clearOfferState(state) {
        state.id = null;
        state.isActive = false;
        state.description = null;
        state.count = null;
        state.isForChild = false;
        state.isMale = false;
        state.isFemale = false;
        state.isUnisex = false;
        state.product = null;
        state.productList = [];
        state.selectedProductId = null;
        state.categoryList = [];
        state.selectedCategoryId = null;
        state.selectedRentalPointId = null;
    },

    setOffersList(state, data) {
        state.offersList = [...data];
    },
    setOffer(state, data) {
        state.id = data.id;
        state.description = data.description;
        state.isMale = data.is_male;
        state.isUnisex = data.is_unisex;
        state.isFemale = data.is_female;
        state.isForChild = data.is_for_child;
        state.product = data.product.name;
        state.selectedProductId = data.product.id;
        state.selectedCategoryId = data.category.id;
        state.selectedRentalPointId = data.rentalPointId;
    }
};
