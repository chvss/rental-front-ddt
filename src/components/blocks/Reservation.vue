<template>
    <v-alert
        outlined
        type="warning"
        prominent
        border="left"
    >
        Бронь: "{{ offer.category.name }} {{ offer.product.name }}". Кол-во: {{offer.count}} шт. С {{ this.formatDate(fromDate) }} до {{ this.formatDate(toDate) }}
        <br>
        Телефон: {{ company.rental_point.phone }}
        <br>
        Статус: {{ status }}
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
</template>

<script>
import {mapState} from 'vuex';
import moment from 'moment';

export default {
    name: 'Reservation',
    data: function () {
        return {
            
        };
    },
    methods: {
        
    },
    computed: {
        ...mapState('Reservation', [
            'offer',
            'fromDate',
            'toDate',
            'count',
            'fromTime',
            'toTime',
            'status'
        ]),
        formatDate(date) {
            return moment(date).format('DD.MM.YYYY');
        }
    }
};
</script>
