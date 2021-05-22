<template>
    <v-dialog
        v-model="isOpen"
        persistent
        max-width="600px"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                text
                v-bind="attrs"
                v-on="on"
            >
                Забронировать
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="headline">Бронирование</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col>
                            <v-menu
                                v-model="fromDatePickerMenu"
                                :close-on-content-click="false"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="newFromDateValue"
                                        label="Выберите дату начала бронирования"
                                        prepend-icon="mdi-calendar"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                    v-model="newFromDateValue"
                                    locale="ru-RU"
                                    no-title
                                    scrollable
                                >
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="fromDatePickerMenu = false"
                                    >
                                        Отменить
                                    </v-btn>
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="() => selectFromDate(newFromDateValue)"
                                    >
                                        Сохранить
                                    </v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-col>
                            <v-menu
                                v-model="toDatePickerMenu"
                                :close-on-content-click="false"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="newToDateValue"
                                        label="Выберите дату окончания бронирования"
                                        prepend-icon="mdi-calendar"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                    v-model="newToDateValue"
                                    locale="ru-RU"
                                    no-title
                                    scrollable
                                >
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="toDatePickerMenu = false"
                                    >
                                        Отменить
                                    </v-btn>
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="() => selectToDate(newToDateValue)"
                                    >
                                        Сохранить
                                    </v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field
                                label="Количество"
                                @input="value => updateCount(value)"
                                :value="count"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="closeDialog"
                >
                    Закрыть
                </v-btn>
                <v-btn
                    color="blue darken-1"
                    text
                >
                    Сохранить
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
    name: 'ReservationDialog',
    data: function () {
        return {
            isOpen: false,
            fromDatePickerMenu: false,
            toDatePickerMenu: false,
            newFromDateValue: null,
            newToDateValue: null,
        };
    },
    methods: {
        ...mapActions('Reservation', [
            'setFromDate',
            'setToDate',
            'setCount'
        ]),
        closeDialog() {
            this.$data.isOpen = false;
        },
        selectFromDate(value) {
            this.setFromDate(value);
            this.$data.fromDatePickerMenu = false;
        },
        selectToDate(value) {
            this.setToDate(value);
            this.$data.toDatePickerMenu = false;
        },
        updateCount: function (value) {
            const regex = /^[0-9]+$/;
            if (value.match(regex)) {
                this.setCount(value);
            }
        }
    },
    computed: {
        ...mapState('Reservation', [
            'fromDate',
            'toDate',
            'count'
        ]),
    },

};
</script>