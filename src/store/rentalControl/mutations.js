export default {
    clear(state) {
        state.offersList = [];
        state.reservationList = [];
    },
    setOffersList(state, data) {
        state.offersList = data;
    },
    setReservationList(state, data) {
        state.reservationList = data;
    }
};