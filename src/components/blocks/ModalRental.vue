<template>
    <v-card
        class="mx-auto mt-4"
    >
        <v-card-title>
            г. {{ rental.address ? rental.address.city_name : '' }},
            {{ rental.address ? rental.address.address : '' }}
        </v-card-title>

        <v-card-text>
            <v-row
                class="mx-0"
            >
                <v-rating
                    :value="rental.general_rating"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                ></v-rating>
            </v-row>

            <div class="mt-4"></div>

            <div>{{ rental.phone }}</div>
            <div><b>Доставка:</b> {{ rental.is_delivery ? 'да' : 'нет' }}</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions>
            <v-btn
                color="deep-purple lighten-2"
                text
            >
                Подробнее
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: 'ModalRental',

    props: {
        rental: {
            type: Object,
            required: true,
        },
    },
};
</script>
