export default {
    isLoggedIn: state => !!state.token,
    isBusiness: state => !!state.user.company.id,
    authUser: state => state.user,
    allRentalsCoords: state => {
        let tmp = [];
        for (let i = 0; i < state.allRentals.length; i++) {
            tmp.push({
                id: Number(state.allRentals[i].id),
                coords: [
                    Number(state.allRentals[i].address.latitude),
                    Number(state.allRentals[i].address.longitude),
                ]
            });
        }

        return tmp;
    }
};
