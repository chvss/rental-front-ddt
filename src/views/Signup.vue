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
            <form @submit.prevent="login" method="POST">
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
                  v-model="secondname"
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

                <!-- ТЕЛЕФОН -->
                <v-text-field
                  v-model="phone"
                  :rules="[rules.required]"
                  label="Телефон"
                  required
                ></v-text-field>

                <!-- ГОРОД -->
                <v-text-field
                  v-model="city"
                  :rules="[rules.required]"
                  label="Город"
                  required
                ></v-text-field>

                <!-- ПАРОЛЬ -->
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

export default {
    name: 'Signup',

    data: () => ({
        show: false,
        valid: false,

        firstname: null,
        secondname: null,
        email: null,
        phone: null,
        city: null,
        password: null,

        username: '',
        rules: {
            required: v => !!v || 'Не может быть пустым',
        },
    }),

    methods: {
        login: function () {
            let data = {
                firstname: this.firstname,
                secondname: this.secondname,
                email: this.email,
                phone: this.phone,
                city: this.city,
                password: this.password,
            };

            this.$store.dispatch('register', data)
                .then(() => this.$router.push('/'))
                .catch(err => console.log(err));
        }
    },

    components: {
        FormSubmitButton,
    }
};
</script>
