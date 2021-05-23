<template>
    <div>
        <v-container>
            <v-row>
                <v-col
                    cols="6"
                    md="4"
                    v-for="offer in (!isLoading ? actualOfferList : [1, 2, 3, 4, 5, 6, 7, 8, 9])"
                    :key="offer.id"
                >
                    <v-card v-if="!isLoading">
                        <v-img class="white--text align-end"
                               max-height="150px"
                               src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                            <v-card-title>
                                {{ offer.product }}
                            </v-card-title>
                        </v-img>

                        <v-card-text>
                            <v-row class="d-block text-center">
                                <div> г.{{ offer.rental_point.address.city_name }},
                                    {{ offer.rental_point.address.address }}
                                </div>
                                <div class="overflow-y-hidden" style="height: 22px; text-overflow: ellipsis">{{ offer.description }}</div>
                            </v-row>

                            <v-row
                                align="center"
                                class="d-flex justify-center"
                            >
                                <v-rating
                                    :value="offer.rating.length ? getMediumScore(offer.rating) : 0"
                                    color="amber"
                                    dense
                                    half-increments
                                    readonly
                                    size="14"
                                ></v-rating>
                            </v-row>

                        </v-card-text>
                        <v-card-actions class="mt-4">
                            <v-btn
                                color="deep-purple lighten-2"
                                text
                                class="absolute l-0 b-1"
                                @click="() => goToCard(offer.id)"
                            >
                                Подробнее
                            </v-btn>

                            <v-btn
                                color="deep-purple lighten-2"
                                text
                                class="absolute r-0 b-1"
                            >
                                <v-icon>mdi-phone</v-icon> {{ offer.rental_point.phone }}
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
    props: {
        filteredOffersList: {
            type: Array,
            default: () => []
        }
    },
    data: function () {
        return {
            isLoading: false
        };
    },
    computed: {
        ...mapState('Offer', [
            'offersList'
        ]),
        actualOfferList() {
            if (this.filteredOffersList.length) {
                return this.filteredOffersList;
            }
            return this.offersList;
        }
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
        if (!this.filteredOffersList.length) {
            this.$data.isLoading = true;
            await this.fetchOffersList();
            this.$data.isLoading = false;
        }
    }
};
</script>
