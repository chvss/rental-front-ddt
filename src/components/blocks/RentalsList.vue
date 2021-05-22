<template>
    <div>
        <!-- Список филиалов -->
        <rental
            v-for="(item, i) in rentals"
            :key="i"
            :number="i"
            :item="item"
            class="mb-4"
            v-on:edit-rental="edit"
        ></rental>

        <!-- Модалка создания/удаления филиала -->
        <v-row justify="center" class="mt-4">
            <v-dialog
                v-model="dialog"
                persistent
                max-width="800px"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="red"
                        active-class="text-accent"
                        text
                        v-bind="attrs"
                        v-on="on"
                    >
                        Добавить филиал
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                    </v-card-title>
                    <v-card-text class="pb-0">
                        <v-container class="pb-0">
                            <v-form ref="form">
                                <v-row>
                                    <!-- ТЕЛЕФОН -->
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field
                                            :rules="rules"
                                            :clearable="true"
                                            v-model="editedItem.phone"
                                            type="text"
                                            label="Телефон"
                                        ></v-text-field>
                                    </v-col>

                                    <!-- ГОРОД -->
                                    <v-col cols="12" sm="6" md="4">
                                        <v-select
                                            :items="this.$store.state.cities"
                                            :rules="rules"
                                            :clearable="true"
                                            v-model="editedItem.address.city"
                                            item-text="name"
                                            item-value="id"
                                            label="Город"
                                            persistent-hint
                                            single-line
                                        ></v-select>
                                    </v-col>

                                    <!-- АДРЕСС -->
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field
                                            :rules="rules"
                                            :clearable="true"
                                            v-model="editedItem.address.address"
                                            type="text"
                                            label="Улица, дом, офис"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row class="-mt-6">
                                    <!-- ШИРОТА -->
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field
                                            :rules="rules"
                                            :clearable="true"
                                            v-model="editedItem.address.latitude"
                                            type="text"
                                            label="широта"
                                            disabled
                                        ></v-text-field>
                                    </v-col>

                                    <!-- ДОЛГОТА -->
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field
                                            :rules="rules"
                                            :clearable="true"
                                            v-model="editedItem.address.longitude"
                                            type="text"
                                            label="долгота"
                                            disabled
                                        ></v-text-field>
                                    </v-col>

                                    <!-- ДОСТАВКА -->
                                    <v-col cols="12" sm="6" md="4">
                                        <v-checkbox
                                            v-model="editedItem.is_delivery"
                                            label="Есть доставка"
                                        ></v-checkbox>
                                    </v-col>
                                </v-row>

                                <Yam class="mt-4"
                                     :is-selectable="true"
                                     :start-coords="coords"
                                     v-on:selectable="selectable"
                                />
                            </v-form>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="close"
                        >
                            Закрыть
                        </v-btn>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="save"
                        >
                            Сохранить
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';

import Yam from '@/components/elements/Yam';
import Rental from '@/components/blocks/Rental';

export default {
    name: 'RentalsList',

    components: {
        Yam,
        Rental,
    },

    data() {
        return {
            dialog: false,

            coords: [54.629571, 39.741884],

            editedIndex: -1,
            editedItem: {
                phone: '',
                is_delivery: true,
                address: {
                    city: 0,
                    address: null,
                    latitude: null,
                    longitude: null,
                }
            },
            defaultItem: {
                phone: '',
                is_delivery: true,
                address: {
                    city: 0,
                    address: null,
                    latitude: null,
                    longitude: null
                }
            },

            rules: [
                v => !!v || 'Обязательно для заполнения',
            ],
        };
    },

    watch: {
        dialog(val) {
            val || this.close();
        },
    },

    computed: {
        ...mapState([
            'rentals',
        ]),
        formTitle() {
            return this.editedIndex === -1
                ? 'Добавление филиала'
                : 'Редактирование филиала';
        },
    },

    methods: {
        ...mapActions([
            'fetchCities',
            'fetchRentals',
        ]),

        resetValidation() {
            this.$refs.form.resetValidation();
        },

        close() {
            this.dialog = false;
            this.editedItem = Object.assign({}, this.defaultItem);
            this.$nextTick(() => {
                this.editedIndex = -1;
                this.resetValidation();
            });
        },

        selectable(coords) {
            this.editedItem.address.latitude = coords[0];
            this.editedItem.address.longitude = coords[1];
        },

        edit(item) {
            this.editedIndex = this.rentals.indexOf(item);
            this.editedItem = Object.assign({}, item);

            this.dialog = true;
        },

        async save() {
            let isValid = this.$refs.form.validate();
            if (!isValid) {
                return;
            }

            if (this.editedIndex > -1) {
                let result = await this.$store.dispatch('updateRental', {
                    rental: this.editedItem,
                    editedIndex: this.editedIndex,
                });
                if (result) {
                    this.close();
                }
            } else {
                let result = await this.$store.dispatch('createRental', this.editedItem);
                if (result) {
                    this.close();
                }
            }
        },
    },

    created() {
        this.fetchCities();
        this.fetchRentals();
    }
};
</script>

<style scoped lang="sass">
.row + .row
    margin-top: -20px
</style>
