<template>
    <div>
        <page-header
            title="Каталог"
            subtitle="В данном разделе представленны компании, предоставляющие услуги проката оборудования в вашем регионе.">
        </page-header>

        <div class="text-center">
            <v-btn-toggle
                v-model="typeViewCompanies"
                tile
                color="red text-accent"
                group
            >
                <v-btn class="rounded" :value="'list'">
                    В виде списка
                </v-btn>

                <v-btn class="rounded" :value="'map'">
                    На карте
                </v-btn>
            </v-btn-toggle>
        </div>

        <v-row v-if="typeViewCompanies === 'list'">
            <v-col
                v-for="(item, i) in companies"
                :key="i"
                cols="12"
                sm="6"
            >
                <company
                    :company="item"
                    class="col-12"
                ></company>
            </v-col>
        </v-row>
        <v-row v-else class="mt-4 catalog-map">
            <Yam
                :is-selectable="false"
                :start-coords="this.$store.state.centerMap"
                :rental-points="allRentalsCoords"
                v-on:click-marker="handleMarker"
            />
        </v-row>

        <div class="text-center">
            <v-bottom-sheet
                v-model="sheet"
                inset
                rounded
            >
                <v-sheet
                    class="text-center"
                    height="300px"
                >
                    <v-btn
                        class="mt-6"
                        text
                        color="error"
                        @click="sheet = !sheet"
                    >
                        Закрыть
                    </v-btn>

                    <v-card
                        v-if="markerRental"
                        class="mx-auto"
                        max-width="344"
                        outlined
                    >
                        <v-list-item three-line>
                            <v-list-item-content>
                                <div class="overline mb-4">
                                    г. {{ markerRental.address ? markerRental.address.city_name : '' }},
                                    {{ markerRental.address ? markerRental.address.address : '' }}
                                </div>
                                <v-list-item-title class="headline mb-1">
                                    {{ markerRental.phone }}
                                </v-list-item-title>

                                <v-rating
                                    :value="markerRental.general_rating"
                                    color="amber"
                                    dense
                                    half-increments
                                    readonly
                                    size="14"
                                ></v-rating>

                                <v-list-item-subtitle></v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>

                        <header-button
                            text="Посмотреть объявления"
                            href="#"
                            color="error"
                        ></header-button>
                    </v-card>
                </v-sheet>
            </v-bottom-sheet>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex';
import Yam from '@/components/elements/Yam';
import Company from '@/components/blocks/Company';
import PageHeader from '@/components/blocks/PageHeader';
import HeaderButton from '@/components/elements/HeaderButton';

export default {
    name: 'Catalog',

    components: {
        Yam,
        Company,
        PageHeader,
        HeaderButton,
    },

    data() {
        return {
            sheet: false,
            markerCompany: null,
        };
    },

    computed: {
        ...mapState([
            'companies',
            'allRentals',
            'markerRental',
        ]),
        ...mapGetters([
            'allRentalsCoords',
        ]),
        typeViewCompanies: {
            get() {
                return this.$store.state.typeViewCompanies;
            },
            set(value) {
                this.$store.commit('setTypeViewCompanies', value);
            }
        }
    },

    methods: {
        ...mapMutations([
            'setTypeViewCompanies',
        ]),
        ...mapActions([
            'fetchCompanies',
            'fetchAllRentals',
        ]),
        async handleMarker(id) {
            let result = await this.$store.dispatch('rentalPointsDetail', id);
            if (result) {
                this.sheet = true;
            }

            console.log(result);
            console.log('handleMarker: ' + id);
        }
    },

    created() {
        this.fetchCompanies();
        this.fetchAllRentals();
    }
};
</script>
