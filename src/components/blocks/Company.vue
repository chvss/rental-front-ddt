<template>
    <v-card
        class="mx-auto mt-4"
    >
        <v-card-title>{{ company.name }}</v-card-title>

        <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
                <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                ></v-rating>

                <div class="grey--text ml-4">
                    4.5 (413)
                </div>
            </v-row>

            <div class="mt-4"></div>

            <div>{{ company.description }}</div>
            <div><b>Кол-во филиалов:</b> {{ company.rental_points.length }}</div>
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
    name: 'Company',

    props: {
        company: {
            type: Object,
            required: true,
        },
    },
};
</script>
