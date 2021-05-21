<template>
    <v-card-text class="white rounded-lg">
        <form @submit.prevent="submit" method="POST">
            <v-container>
                <!-- ИМЯ -->
                <v-text-field
                    v-model="user.firstname"
                    :rules="[rules.required]"
                    :counter="50"
                    label="Имя"
                    required
                ></v-text-field>

                <!-- ФАМИЛИЯ -->
                <v-text-field
                    v-model="user.lastname"
                    :rules="[rules.required]"
                    :counter="50"
                    label="Фамилия"
                    required
                ></v-text-field>

                <!-- ПОЧТА -->
                <v-text-field
                    v-model="user.email"
                    :rules="[rules.required]"
                    :counter="50"
                    label="Email"
                    required
                ></v-text-field>

                <!-- ТЕЛЕФОН -->
                <v-text-field
                    v-model="user.phone"
                    :rules="[rules.required]"
                    :counter="15"
                    label="Телефон"
                    required
                ></v-text-field>

                <!-- ГОРОД -->
                <v-text-field
                    v-model="user.city"
                    :counter="255"
                    label="Город"
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
import {mapGetters} from 'vuex';

export default {
    name: 'UserPersonalForm',

    data() {
        return {
            user: null,
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
                first_name: this.user.firstname,
                last_name: this.user.lastname,
                email: this.user.email,
                phone: this.user.phone,
                city: this.user.city,
            };

            this.$store.dispatch('updateUserProfile', data)
                .then(() => {
                })
                .catch(err => console.log(err));
        }
    },

    components: {
        FormSubmitButton,
    },

    created() {
        this.user = this.authUser;
    }
};
</script>
