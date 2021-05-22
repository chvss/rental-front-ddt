<template>
    <v-card-text class="white rounded-lg">
        <form @submit.prevent="submit" method="POST">
            <v-container>
                <!-- НАЗВАНИЕ -->
                <v-text-field
                    outlined
                    v-model="company.name"
                    :rules="[rules.required]"
                    :counter="50"
                    label="Название компании"
                    required
                ></v-text-field>

                <!-- ОПИСАНИЕ -->
                <v-textarea
                    outlined
                    rows="3"
                    v-model="company.description"
                    :counter="1024"
                    class="mt-4"
                >
                    <template v-slot:label>
                        <div>
                            Описание <small>(не обязательно)</small>
                        </div>
                    </template>
                </v-textarea>

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
    name: 'BusinessAccountInfoForm',

    data() {
        return {
            rules: {
                required: v => !!v || 'Не может быть пустым',
            },
        };
    },

    computed: {
        ...mapGetters([
            'authUser',
        ]),
        company: {
            get: function () {
                return {
                    name: this.authUser.company.name,
                    description: this.authUser.company.description,
                };
            },
        }
    },

    methods: {
        submit: async function () {
            await this.$store.dispatch('updateCompany', {
                name: this.company.name,
                description: this.company.description,
            });
        }
    },

    components: {
        FormSubmitButton,
    },

    created() {
    }
};
</script>
