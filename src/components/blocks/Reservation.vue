<template>
    <v-alert
        outlined
        :type="getType"
        prominent
        border="left"
    >
        Бронь: "{{ offer.category.name }} {{ offer.product.name }}". Кол-во: {{offer.count}} шт. С {{ this.formatFromDate }} до {{ this.formatDate(offer.datetime_to) }}
        <br>
        Телефон: {{ rental.phone }}
        <br>
        Статус: {{ reservation.status }}
        <div class="absolute r-0 b-0">
            <v-btn
                v-if="reservation.status === 'Новая'"
                color="green"
                text
            >
                Принять
            </v-btn>
            <v-btn
                v-if="reservation.status !== 'Выполнена'"
                color="red"
                text
            >
                Отказать
            </v-btn>
            <v-btn
                v-if="reservation.status !== 'Выполнена'"
                color="lighten-2"
                text
            >
                Выполнено
            </v-btn>
        </div>
    </v-alert>
</template>

<script>
import moment from 'moment';

export default {
    name: 'Reservation',
    data: function () {
        return {
            
        };
    },
    props: {
        offer: {
            default: () => ({})
        },
        reservation: {
            default: () => ({})
        },
        rental: {
            default: () => ({})
        }
    },
    methods: {
        formatDate: (date) => moment(date).format('DD.MM.YYYY')
    },
    computed: {
        formatFromDate() {
            return this.formatDate(this.offer.datetime_from);
        },
        getType() {
            switch (this.reservation.status) {
                case 'Новая':
                    return 'warning';
                default:
                    return 'success';
            }
        }
    }
};
</script>
