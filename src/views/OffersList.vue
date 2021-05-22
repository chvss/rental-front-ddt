<template>
    <div>
        <v-container>
            <v-row>
                <v-col
                    cols="6"
                    md="4"
                    v-for="offer in (!isLoading ? offersList : [1, 2, 3, 4, 5, 6, 7, 8, 9])"
                    :key="offer.id"
                >
                    <v-card v-if="!isLoading">
                        <v-img class="white--text align-end"
                               max-height="150px"
                               src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                            <v-card-title>
                                {{offer.product}}
                            </v-card-title>
                        </v-img>

                        <v-card-text>
                            <v-row
                                align="center"
                                class="mx-0"
                            >
                                <v-rating
                                    :value="offer.rating.length ? getMediumScore(offer.rating) : 0"
                                    color="amber"
                                    dense
                                    half-increments
                                    readonly
                                    size="14"
                                ></v-rating>

                                <div class="grey--text ms-4">
                                    {{ offer.rating.length ? getMediumScore(offer.rating) : 0 }} ({{offer.rating.length}})
                                </div>
                            </v-row>
                            <v-row>
                                <p>{{offer.rental_point.address.address}}</p>
                                {{offer.description}}
                            </v-row>



                        </v-card-text>
                        <v-card-subtitle>
                            {{offer.rental_point.phone}}
                        </v-card-subtitle>
                        <v-card-actions>
                            <v-btn
                                color="deep-purple lighten-2"
                                text
                                @click="() => goToCard(offer.id)"
                            >
                                Подробнее
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                    <v-skeleton-loader
                        v-if="isLoading"
                        class="mx-auto"
                        max-width="300"
                        type="card"/>
                </v-col>
            </v-row>

        </v-container>
    </div>

</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
    name: 'OffersList',
    data: function () {
        return {
            isLoading: false
        };
    },
    computed: {
        ...mapState('Offer', [
            'offersList'
        ]),
    },
    methods: {
        ...mapActions('Offer', [
            'fetchOffersList'
        ]),
        getMediumScore(rating) {
            const count = rating.length;
            const summ = rating.reduce((sum, item) => sum + item.mark, 0);
            return parseFloat((summ / count).toFixed(2));
        },
        goToCard(id) {
            this.$router.push(`/offers/${id}`);
        }
    },
    created: async function () {
        this.$data.isLoading = true;
        await this.fetchOffersList();
        this.$data.isLoading = false;
    }
};
</script>
