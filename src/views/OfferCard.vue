<template>
    <v-container>
        <v-card class="overflow-hidden" max-width="100%" max-height="100%">
            <v-app-bar
                absolute
                color="#fcb69f"
                dark
                shrink-on-scroll
                src="https://veloolimp.com/images/product_images/original_images/10815_0.jpg"
                scroll-target="#scrolling-techniques-2"
            >
                <template v-slot:img="{ props }">
                    <v-img
                        v-bind="props"
                        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
                    ></v-img>
                </template>

                <v-btn icon @click="goToList">
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-app-bar-title style="width: auto">{{currentOffer.product}}</v-app-bar-title>
                <v-spacer></v-spacer>
                <v-row no-gutters>
                    <v-col md="3"
                           offset-md="3">
                        <v-btn icon>
                            <v-icon>mdi-heart</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col>
                        <reservation-dialog />
                    </v-col>
                </v-row>
            </v-app-bar>
            <v-sheet
                id="scrolling-techniques-2"
                class="overflow-y-auto"
                max-height="600"
            >
                <v-container style="height: 1000px; margin-top: 125px">
                    <v-card>
                        <v-card-title>
                            {{currentOffer.rental_point.address.city_name}}
                        </v-card-title>
                        <v-card-text>
                            {{currentOffer.rental_point.address.address}}
                            <Yam
                                :start-coords="[currentOffer.rental_point.address.latitude, currentOffer.rental_point.address.longitude]"
                                :is-selectable="false"
                                :is-one-point="true"
                            />
                        </v-card-text>
                    </v-card>
                </v-container>
            </v-sheet>
        </v-card>
    </v-container>

</template>

<script>
import {mapActions, mapState} from 'vuex';
import ReservationDialog from '../components/modals/ReservationDialog';
import Yam from '../components/elements/Yam';

export default {
    name: 'OfferCard',
    components: {Yam, ReservationDialog},
    data: function () {
        return {
            isLoading: false
        };
    },
    methods: {
        ...mapActions('Offer', [
            'getOfferById'
        ]),
        goToList() {
            return this.$router.push('/');
        }
    },
    computed: {
        ...mapState('Offer', [
            'currentOffer'
        ]),
    },
    async created() {
        this.$data.isLoading = true;
        await this.getOfferById(this.$route.params.id);
        this.$data.isLoading = false;
    }
};
</script>