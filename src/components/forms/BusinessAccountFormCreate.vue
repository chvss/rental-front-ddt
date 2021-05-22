<template>
    <v-card-text class="white rounded-lg">
        <form @submit.prevent="submit" method="POST">
            <v-container>
                <!-- НАЗВАНИЕ КОМПАНИИ -->
                <v-text-field
                    v-model="name"
                    :rules="[rules.required]"
                    label="Название вашей компании"
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
import FormSubmitButton from '@/components/elements/FormSubmitButton';

export default {
    name: 'BusinessAccountFormCreate',

    data: () => ({
        name: null,
        rules: {
            required: v => !!v || 'Не может быть пустым',
        },
    }),

    methods: {
        submit: async function () {
            const result = await this.$store.dispatch('createBusinessAccount', {
                name: this.name,
            });

            if (result) {
                this.$router.push('/business-account');
            }
        }
    },

    components: {
        FormSubmitButton,
    }
};
</script>
