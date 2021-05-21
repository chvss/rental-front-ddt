<template>
    <v-card-text class="white rounded-lg">
        <form @submit.prevent="submit" method="POST">
            <v-container>
                <!-- НАЗВАНИЕ -->
                <v-text-field
                    v-model="rental.name"
                    :rules="[rules.required]"
                    :counter="50"
                    label="Филиал"
                    required
                ></v-text-field>

                <div class="text-center">
                    <FormSubmitButton text="Сохранить"/>
                </div>
            </v-container>
        </form>
    </v-card-text>
</template>

<script>
import {mapGetters} from 'vuex';
import FormSubmitButton from '@/components/elements/FormSubmitButton';

export default {
    name: 'BusinessAccountRentalForm',

    data() {
        return {
            rental: {
                name: null,
            },
            rules: {
                required: v => !!v || 'Не может быть пустым',
            },
        };
    },

    computed: {
        ...mapGetters([
            'authUser',
        ])
    },

    methods: {
        submit: function () {
            let data = {
                name: this.rental.name,
            };

            this.$store.dispatch('createRental', data)
                .then(() => {
                })
                .catch(err => console.log(err));
        }
    },

    components: {
        FormSubmitButton,
    },
};
</script>
