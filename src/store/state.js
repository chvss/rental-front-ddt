export default {
    authStatus: '',
    token: localStorage.getItem('token') || '',
    errors: {},
    user: {
        firstname: null,
        lastname: null,
        email: null,
        phone: null,
        city: null,
        company: {
            id: null,
            name: null,
            description: null,
            rentalPoints: []
        }
    },
    rentals: [],
    allRentals: [],
    markerRental: null,
    companies: [],
    typeViewCompanies: 'list',
    cities: [],

    centerMap: [66.087987, 76.672285],
    offersRentalPoints: [],
    dialogEditOffer: false,
};
