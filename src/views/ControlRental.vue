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
                    v-for="(rental, i) in rentals"
                    :key="i"
                    class="mx-auto mt-4"
                >
                    <v-card-title># {{ rental.id }} {{ rental.product }}</v-card-title>

                    <v-card-text>
                        <div>{{ rental.description }}</div>
                        <div>{{ rental.count }} шт.</div>
                        <div>
                          Ассортимент:
                            <span v-if="rental.is_for_child" :class="rental.is_for_child ? 'red--text' : ''" class="mr-4">Детский</span>
                            <span v-if="rental.is_female" :class="rental.is_female ? 'red--text' : ''" class="mr-4">Женский</span>
                            <span v-if="rental.is_male" :class="rental.is_male ? 'red--text' : ''" class="mr-4">Мужской</span>
                            <span v-if="rental.is_unisex" :class="rental.is_unisex ? 'red--text' : ''" class="mr-4">Гендерно-нейтральный</span>
                        </div>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-actions>
                        <v-btn
                            color="green"
                            text
                            @click="edit(rental)"
                        >
                            Редактировать
                        </v-btn>

                        <v-btn
                            v-if="rental.is_active"
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
                    </v-card-actions>
                </v-card>
            </v-tab-item>

            <v-tab-item class="pt-4">
                <v-card flat>
                    <v-card-text>
                        <v-alert
                            text
                            outlined
                            color="deep-orange"
                            icon="mdi-fire"
                        >
                            У вас пока нет ни одного бронирования
                        </v-alert>
                    </v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

import OfferDialog from '../components/modals/OfferDialog';
import PageHeader from '@/components/blocks/PageHeader';

export default {
    name: 'ControlRental',

    data() {
        return {
            rentals: null,
            activeTab: null,
            tabs: [
                'Предложения', 'Бронирования'
            ],
        };
    },

    components: {
        OfferDialog,
        PageHeader,
    },

    methods: {
        ...mapActions([
            'rentalPointsDetail',
            'offersRentalPoints',
        ]),
        edit(rental) {
            this.$store.commit('setDialogEditOffer', true);
            console.log(rental);
        },
        block() {
            console.log('block');
        },
    },

    async created() {
        this.rentals = await this.offersRentalPoints(this.$route.params.id);
    }
};
</script>
