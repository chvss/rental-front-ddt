<template>
    <div>
        <v-alert
            text
            outlined
            color="deep-orange"
            icon="mdi-fire"
        >
            Авторизация
        </v-alert>
        <v-container fluid>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card-text>
                        <form @submit.prevent="login" method="POST">
                            <v-container>
                                <v-text-field
                                    v-model="email"
                                    :rules="[rules.required]"
                                    label="Email"
                                    required
                                ></v-text-field>

                                <v-text-field
                                    v-model="password"
                                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                    :rules="[rules.required]"
                                    :type="show ? 'text' : 'password'"
                                    label="Пароль"
                                    required
                                    @click:append="show = !show"
                                ></v-text-field>

                                <div class="text-center">
                                    <FormSubmitButton text="Войти"/>
                                </div>
                            </v-container>
                        </form>
                    </v-card-text>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import FormSubmitButton from '@/components/elements/FormSubmitButton';
import {mapActions} from 'vuex';

export default {
    name: 'Login',

    data: () => ({
        show: false,
        valid: false,
        email: null,
        password: '',
        rules: {
            required: v => !!v || 'Не может быть пустым',
        },
    }),

    methods: {
        ...mapActions([
            'fetchUser',
        ]),
        login: async function () {
            const email = this.email;
            const password = this.password;
            const result = await this.$store.dispatch('login', {email, password});
            console.log(result);
            if (result) {
                this.$router.push('/');
            }
        }
    },

    components: {
        FormSubmitButton,
    }
};
</script>
