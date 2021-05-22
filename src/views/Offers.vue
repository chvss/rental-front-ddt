<template>
    <div>
        <v-alert
            text
            outlined
            color="deep-orange"
            icon="mdi-fire"
        >
            Каталог
        </v-alert>
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
                               height="150px"
                               src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                            <v-card-title>
                                {{offer.product}}
                            </v-card-title>
                        </v-img>

                        <v-card-text>
                            <div>{{offer.rental_point.address.address}}</div>
                            <p>{{offer.rental_point.phone}}</p>
                            <div class="text--primary">
                                {{offer.description}}
                            </div>
                            <v-chip
                                v-for="(item, number) in Object.entries(offer)
                                                    .filter(i => i[0].startsWith('is') && i[1])
                                                    .map(i => {
                                                        switch (i[0]) {
                                                            case 'is_female': return 'Для женщин';
                                                            case 'is_for_children': return 'Для детей';
                                                            case 'is_male': return 'Для мужчин';
                                                            case 'is_unisex': return 'Гендерно-нейтральный';
                                                            default: return null;
                                                        }
                                                    })"
                                }
                                :key="number"
                                class="ma-2"
                                color="green"
                                text-color="white"
                            >
                                {{item}}
                            </v-chip>
                        </v-card-text>
                        <v-card-subtitle>

                        </v-card-subtitle>
                        <v-card-actions>
                            <v-list-item>

                            </v-list-item>
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
    name: 'Offers',
    data: function () {
        return {
            isLoading: false
        };
    },
    computed: {
        ...mapState('Offer', [
            'offersList'
        ])
    },
    methods: {
        ...mapActions('Offer', [
            'fetchOffersList'
        ])
    },
    created: async function () {
        this.$data.isLoading = true;
        await this.fetchOffersList();
        this.$data.isLoading = false;
    }
};
</script>
