<template>
    <v-dialog
        v-model="isOpen"
        persistent
        max-width="600px"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                style="margin-top: 6px"
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
                            <v-menu
                                v-model="fromTimePickerMenu"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="290px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="newFromTimeValue"
                                        label="Выберите время начала бронирования"
                                        prepend-icon="mdi-clock-time-four-outline"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-time-picker
                                    v-if="fromTimePickerMenu"
                                    v-model="newFromTimeValue"
                                    full-width
                                    format="24hr"
                                    header-color="blue accent-1"
                                    @click:minute="() => selectFromTime(newFromTimeValue)"
                                ></v-time-picker>
                            </v-menu>
                        </v-col>
                        <v-col>
                            <v-menu
                                v-model="toTimePickerMenu"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="290px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="newToTimeValue"
                                        label="Выберите время окончания бронирования"
                                        prepend-icon="mdi-clock-time-four-outline"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-time-picker
                                    v-if="toTimePickerMenu"
                                    v-model="newToTimeValue"
                                    full-width
                                    format="24hr"
                                    header-color="blue accent-1"
                                    @click:minute="() => selectToTime(newToTimeValue)"
                                ></v-time-picker>
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
                    @click="save"
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
            fromTimePickerMenu: false,
            toTimePickerMenu: false,
            newFromDateValue: null,
            newToDateValue: null,
            newFromTimeValue: null,
            newToTimeValue: null,
        };
    },
    methods: {
        ...mapActions('Reservation', [
            'setFromDate',
            'setToDate',
            'setFromTime',
            'setToTime',
            'setCount',
            'clear',
            'createReservation'
        ]),
        closeDialog() {
            this.$data.isOpen = false;
            this.clear();
        },
        async save() {
            const data = {
                datetime_from: `${this.fromDate}T${this.fromTime}`,
                datetime_to: `${this.toDate}T${this.toTime}`,
                count: this.count
            };
            await this.createReservation({id: this.currentOffer.id, data});
        },
        selectFromDate(value) {
            this.setFromDate(value);
            this.$data.fromDatePickerMenu = false;
        },
        selectToDate(value) {
            this.setToDate(value);
            this.$data.toDatePickerMenu = false;
        },
        selectFromTime(value) {
            this.setFromTime(value);
            this.$data.fromTimePickerMenu = false;
        },
        selectToTime(value) {
            this.setToTime(value);
            this.$data.toTimePickerMenu = false;
        },
        updateCount: function (value) {
            const regex = /^[0-9]+$/;
            if (value.match(regex)) {
                this.setCount(value);
            }
        },
    },
    computed: {
        ...mapState('Reservation', [
            'fromDate',
            'toDate',
            'fromTime',
            'toTime',
            'count'
        ]),
        ...mapState('Offer', [
            'currentOffer'
        ])
    },

};
</script>