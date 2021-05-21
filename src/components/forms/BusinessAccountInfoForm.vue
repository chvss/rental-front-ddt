<template>
    <v-card-text class="white rounded-lg">
        <form @submit.prevent="submit" method="POST">
            <v-container>
                <!-- НАЗВАНИЕ -->
                <v-text-field
                    v-model="company.name"
                    :rules="[rules.required]"
                    :counter="50"
                    label="Название компании"
                    required
                ></v-text-field>

                <!-- ОПИСАНИЕ -->
                <v-textarea
                    v-model="company.description"
                    :counter="1024"
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
            company: {
                name: null,
                description: null,
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
                name: this.company.name,
                description: this.company.description,
            };

            this.$store.dispatch('updateCompanyInfo', data)
                .then(() => {
                })
                .catch(err => console.log(err));
        }
    },

    components: {
        FormSubmitButton,
    },

    created() {
    }
};
</script>
