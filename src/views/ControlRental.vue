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
                            <span v-if="rental.is_unisex" :class="rental.is_unisex ? 'red--text' : ''" class="mr-4">Унисекс</span>
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
                              outlined
                              type="warning"
                              prominent
                              border="left"
                          >
                            Бронь: "Велосипед горный". Кол-во: 1 шт. С 25.05.2021 до 26.05.2021
                            <br>
                            Телефон: 8-993-825-64-56
                            <br>
                            Статус: Новая
                            <div class="absolute r-0 b-0">
                              <v-btn
                                  color="green"
                                  text
                              >
                                Принять
                              </v-btn>
                              <v-btn
                                  color="red"
                                  text
                              >
                                Отказать
                              </v-btn>
                              <v-btn
                                  color="lighten-2"
                                  text
                              >
                                Выполнено
                              </v-btn>
                            </div>
                          </v-alert>
                          <v-alert
                              outlined
                              type="success"
                              text
                          >
                            Бронь: "Велосипед горный". Кол-во: 2шт. С 21.05.2021 до 22.05.2021
                            <br>
                            Телефон: 8-993-825-64-56
                            <br>
                            Статус: Выполнено
                          </v-alert>

                          <v-alert
                              outlined
                              type="success"
                              text
                          >
                            Бронь: "Велосипед горный". Кол-во: 2шт. С 21.05.2021 до 22.05.2021
                            <br>
                            Телефон: 8-923-478-45-63
                            <br>
                            Статус: Выполнено
                          </v-alert>
                          <v-alert
                              outlined
                              type="success"
                              text
                          >
                            Бронь: "Велосипед детский". Кол-во: 1шт. С 15.05.2021 до 18.05.2021
                            <br>
                            Телефон: 8-918-333-80-80
                            <br>
                            Статус: Выполнено
                          </v-alert>
                    </v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';

import OfferDialog from '../components/modals/OfferDialog';
import PageHeader from '@/components/blocks/PageHeader';

export default {
    name: 'ControlRental',
    components: {
        OfferDialog,
        PageHeader,
    },
    data() {
        return {
            rentals: null,
            activeTab: null,
            tabs: [
                'Предложения', 'Бронирования'
            ],
        };
    },
    methods: {
        ...mapActions([
            'rentalPointsDetail',
            'offersRentalPoints',
        ]),
        ...mapActions('RentalControl', [
            'clearState',
            'setOffersList',
            'setReservationList',
            'fetchReservationsByRentalId'
        ]),
        edit(rental) {
            this.$store.commit('setDialogEditOffer', true);
            console.log(rental);
        },
        block() {
            console.log('block');
        },
    },
    computed: {
        ...mapState('RentalControl', [
            'offersList',
            'reservationList'
        ])
    },

    async created() {
        this.rentals = await this.offersRentalPoints(this.$route.params.id);
        await this.fetchReservationsByRentalId(this.$route.params.id);
    }
};
</script>
