<template>
    <v-container class="pa-#">
        <v-card>
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

                <v-app-bar-title>Title</v-app-bar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>

                <reservation-dialog/>
            </v-app-bar>
            <v-sheet
                id="scrolling-techniques-2"
                class="overflow-y-auto"
                max-height="600"
            >
                <v-container style="height: 1000px;"></v-container>
            </v-sheet>
        </v-card>
    </v-container>

</template>

<script>
import {mapActions, mapState} from 'vuex';
import ReservationDialog from '../components/modals/ReservationDialog';

export default {
    name: 'OfferCard',
    components: {ReservationDialog},
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