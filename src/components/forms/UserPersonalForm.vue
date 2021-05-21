<template>
  <v-card-text class="white rounded-lg">
    <form @submit.prevent="submit" method="POST">
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

    data: () => ({
        firstname: null,
        secondname: null,
        email: null,
        phone: null,
        city: null,

        username: '',
        rules: {
            required: v => !!v || 'Не может быть пустым',
        },
    }),

    methods: {
        submit: function () {
            let data = {
                firstname: this.firstname,
                secondname: this.secondname,
                email: this.email,
                phone: this.phone,
                city: this.city,
            };

            // TODO: заглушка на изменение личных данных
            this.$store.dispatch('changePersonalInfo', data)
                .then(() => this.$router.push('/'))
                .catch(err => console.log(err));
        }
    },

    components: {
        FormSubmitButton,
    }
};
</script>
