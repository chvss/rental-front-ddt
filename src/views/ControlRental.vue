<template>
    <div>
        <page-header
            title="Управление филиалом"
            subtitle="В данном разделе вы можете управлять конкретным филиалом. Просматривать бронирования, управлять предложениями.">
        </page-header>

        <v-tabs
            v-model="activeTab"
            color="basil"
        >
            <v-tab
                v-for="tabt in tabs"
                :key="tabt"
            >
                {{ tabt }}
            </v-tab>
        </v-tabs>

        <v-tabs-items v-model="activeTab">
            <v-tab-item class="pt-4">
                <v-row>
                    <v-col>
                        <OfferDialog :rental-id="Number(this.$route.params.id)"/>
                    </v-col>
                </v-row>

                <v-card
                    v-for="(offer, i) in offers"
                    :key="i"
                    class="mx-auto mt-4"
                >
                    <v-card-title># {{ offer.id }} {{ offer.product.name }}</v-card-title>

                    <v-card-text>
                        <div>{{ offer.description }}</div>
                        <div>{{ offer.count }} шт.</div>
                        <div>
                          Ассортимент:
                            <span v-if="offer.is_for_child" :class="offer.is_for_child ? 'red--text' : ''" class="mr-4">Детский</span>
                            <span v-if="offer.is_female" :class="offer.is_female ? 'red--text' : ''" class="mr-4">Женский</span>
                            <span v-if="offer.is_male" :class="offer.is_male ? 'red--text' : ''" class="mr-4">Мужской</span>
                            <span v-if="offer.is_unisex" :class="offer.is_unisex ? 'red--text' : ''" class="mr-4">Унисекс</span>
                        </div>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-actions>
                        <v-btn
                            color="green"
                            text
                            @click="edit(offer)"
                        >
                            Редактировать
                        </v-btn>

                        <v-btn
                            v-if="offer.is_active"
                            color="red lighten-2"
                            text
                            @click="block"
                        >
                            Снять с публикации
                        </v-btn>
                        <v-btn
                            v-else
                            color="red lighten-2"
                            text
                            @click="block"
                        >
                            Опубликовать
                        </v-btn>
                        <v-btn
                            color="blue"
                            text
                            @click="block">
                            Подробнее
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-tab-item>

            <v-tab-item class="pt-4">

                <Reservation
                    v-for="reservaton in reservationList"
                    :key="reservaton.id"
                    :reservation="reservaton"
                    :offer="offers.find(item => item.id === reservaton.offer)"
                    :rental="currentRental"
                />
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';

import OfferDialog from '../components/modals/OfferDialog';
import PageHeader from '@/components/blocks/PageHeader';
import Reservation from '../components/blocks/Reservation';

export default {
    name: 'ControlRental',
    components: {
        Reservation,
        OfferDialog,
        PageHeader,
    },
    data() {
        return {
            offers: null,
            activeTab: null,
            currentRental: {},
            tabs: [
                'Предложения', 'Бронирования'
            ],
        };
    },
    methods: {
        ...mapActions([
            'rentalPointsDetail',
            'offersRentalPoints',
            'rentalPointsDetail'
        ]),
        ...mapActions('RentalControl', [
            'clearState',
            'setOffersList',
            'setReservationList',
            'fetchReservationsByRentalId'
        ]),
        ...mapActions('Offer', [
            'setOffer'
        ]),
        edit(offer) {
            this.$store.commit('setDialogEditOffer', true);
            this.setOffer({
                ...offer,
                rentalPointId: this.$route.params.id
            });
            console.log(offer);
        },
        block() {
            console.log('block');
        },
    },
    computed: {
        ...mapState('RentalControl', [
            'reservationList'
        ])
    },

    async created() {
        this.offers = await this.offersRentalPoints(this.$route.params.id);
        await this.fetchReservationsByRentalId(this.$route.params.id);
        this.currentRental = await this.rentalPointsDetail(this.$route.params.id);
    }
};
</script>
