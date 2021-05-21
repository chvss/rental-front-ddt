<template>
    <v-card-text class="white rounded-lg">
        <form @submit.prevent="submit" method="POST">
            <v-container>
                <!-- ИМЯ -->
                <v-text-field
                    v-model="user.firstname"
                    :rules="[rules.required]"
                    label="Имя"
                    required
                ></v-text-field>

                <!-- ФАМИЛИЯ -->
                <v-text-field
                    v-model="user.secondname"
                    :rules="[rules.required]"
                    label="Фамилия"
                    required
                ></v-text-field>

                <!-- ПОЧТА -->
                <v-text-field
                    v-model="user.email"
                    :rules="[rules.required]"
                    label="Email"
                    required
                ></v-text-field>

                <!-- ТЕЛЕФОН -->
                <v-text-field
                    v-model="user.phone"
                    :rules="[rules.required]"
                    label="Телефон"
                    required
                ></v-text-field>

                <!-- ГОРОД -->
                <v-text-field
                    v-model="user.city"
                    :rules="[rules.required]"
                    label="Город"
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
    name: 'UserPersonalForm',

    data() {
        return {
            user: {
                firstname: this.$store.state.user.firstname,
                secondname: this.$store.state.user.secondname,
                email: this.$store.state.user.email,
                phone: this.$store.state.user.phone,
                city: this.$store.state.user.city,
            },
            rules: {
                required: v => !!v || 'Не может быть пустым',
            },
        }
    },

    methods: {
        submit: function () {
            let data = {
                firstname: this.user.firstname,
                secondname: this.user.secondname,
                email: this.user.email,
                phone: this.user.phone,
                city: this.user.city,
            }

            // TODO: заглушка на изменение личных данных
            this.$store.dispatch('changePersonalInfo', data)
                .then(() => this.$router.push('/'))
                .catch(err => console.log(err))
        }
    },

    components: {
        FormSubmitButton,
    }
}
</script>
