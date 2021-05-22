<template>
    <v-card
        class="mx-auto"
        outlined
    >
        <v-list-item three-line>
            <v-list-item-content>
                <div class="overline">
                    #{{ number + 1 }}
                </div>
                <v-list-item-title class="headline">
                    г. {{ item.address.city_name }}, {{ item.address.address }}
                </v-list-item-title>
                <v-list-item-subtitle>
                    {{ item.description }}
                </v-list-item-subtitle>
                <div>Телефон: <span class="text-accent">{{ item.phone }}</span></div>
            </v-list-item-content>
        </v-list-item>

        <v-card-actions class="absolute t-0 r-0">
            <default-button
                v-on:button-click="$emit('edit-rental', item)"
                classes=""
                text="Редактировать"
            ></default-button>
        </v-card-actions>

        <v-card-actions class="absolute b-0 r-0">
            <router-link :to="'/control-rental/' + item.id" role="menuitem" class="text-decoration-none text-base">
                <span class="mx-4">Управление</span>
            </router-link>
        </v-card-actions>
    </v-card>
</template>

<script>
import DefaultButton from '@/components/elements/DefaultButton';

export default {
    name: 'Rental',

    props: {
        item: {
            type: Object,
            required: true,
        },
        number: {
            type: Number,
            required: true,
        }
    },

    components: {
        DefaultButton,
    }
};
</script>
