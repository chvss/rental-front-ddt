export default {
    setFromDate(state, data) {
        state.fromDate = data;
    },
    setToDate(state, data) {
        state.toDate = data;
    },
    setFromTime(state, data) {
        state.fromTime = data;
    },
    setToTime(state, data) {
        state.toTime = data;
    },
    setCount(state, data) {
        state.count = data;
    },
    clear(state) {
        state.fromDate = null;
        state.toDate = null;
        state.count = null;
    }
};