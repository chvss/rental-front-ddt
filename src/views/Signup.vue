<template>
    <div>
        <v-alert
            text
            outlined
            color="deep-orange"
            icon="mdi-fire"
        >
            Регистрация
        </v-alert>

        <v-container fluid>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card-text>
                        <form @submit.prevent="signup" method="POST">
                            <v-container>
                                <!-- ИМЯ -->
                                <v-text-field
                                    v-model="firstname"
                                    :rules="[rules.required]"
                                    label="Имя"
                                    required
                                ></v-text-field>

                                <!-- ФАМИЛИЯ -->
                                <v-text-field
                                    v-model="lastname"
                                    :rules="[rules.required]"
                                    label="Фамилия"
                                    required
                                ></v-text-field>

                                <!-- ПОЧТА -->
                                <v-text-field
                                    v-model="email"
                                    :rules="[rules.required]"
                                    label="Email"
                                    required
                                ></v-text-field>

                                <!-- ГОРОД -->
                                <v-select
                                    :items="cities"
                                    :rules="[rules.required]"
                                    :clearable="true"
                                    v-model="city"
                                    item-text="name"
                                    item-value="id"
                                    label="Город"
                                    persistent-hint
                                    single-line
                                ></v-select>

                                <!-- ПАРОЛЬ -->
                                <v-text-field
                                    v-model="password1"
                                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                    :rules="[rules.required]"
                                    :type="show1 ? 'text' : 'password'"
                                    label="Пароль"
                                    required
                                    @click:append="show1 = !show1"
                                ></v-text-field>

                                <v-text-field
                                    v-model="password2"
                                    :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                                    :rules="[rules.required]"
                                    :type="show2 ? 'text' : 'password'"
                                    label="Повторите пароль"
                                    required
                                    @click:append="show2 = !show2"
                                ></v-text-field>

                                <div class="text-center">
                                    <FormSubmitButton text="Зарегистироваться"/>
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
import {mapActions, mapState} from 'vuex';

export default {
    name: 'Signup',

    data: () => ({
        show1: false,
        show2: false,

        firstname: null,
        lastname: null,
        email: null,
        city: null,
        password1: null,
        password2: null,

        rules: {
            required: v => !!v || 'Не может быть пустым',
        },
    }),

    computed: {
        ...mapState([
            'cities',
        ]),
    },

    methods: {
        ...mapActions([
            'fetchCities',
        ]),
        signup: async function () {
            let data = {
                first_name: this.firstname,
                last_name: this.lastname,
                email: this.email,
                address: {
                    city: this.city,
                },
                password1: this.password1,
                password2: this.password2,
            };

            const result = await this.$store.dispatch('register', data);
            if (result) {
                this.$router.push('/login');
            }
        }
    },

    components: {
        FormSubmitButton,
    },

    created() {
        this.fetchCities();
    }
};
</script>
