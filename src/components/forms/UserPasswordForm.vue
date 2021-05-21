<template>
  <v-card-text class="white rounded-lg">
    <form @submit.prevent="submit" method="POST">
      <v-container>
        <!-- ПАРОЛЬ -->
        <v-text-field
          v-model="password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required]"
          :type="showPassword ? 'text' : 'password'"
          label="Пароль"
          required
          @click:append="showPassword = !showPassword"
        ></v-text-field>

        <!-- НОВЫЙ ПАРОЛЬ -->
        <v-text-field
          v-model="newPassword"
          :append-icon="showNewPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required]"
          :type="showNewPassword ? 'text' : 'password'"
          label="Новый пароль"
          required
          @click:append="showNewPassword = !showNewPassword"
        ></v-text-field>

        <!-- ПОВТОРИТЕ НОВЫЙ ПАРОЛЬ -->
        <v-text-field
          v-model="repeatNewPassword"
          :append-icon="showRepeatNewPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required]"
          :type="showRepeatNewPassword ? 'text' : 'password'"
          label="Повторите новый пароль"
          required
          @click:append="showRepeatNewPassword = !showRepeatNewPassword"
        ></v-text-field>

        <div class="text-center">
          <FormSubmitButton text="Сменить пароль"/>
        </div>
      </v-container>
    </form>
  </v-card-text>
</template>

<script>
import FormSubmitButton from "@/components/elements/FormSubmitButton";

export default {
  name: "UserPasswordForm",

  data: () => ({
    showPassword: false,
    showNewPassword: false,
    showRepeatNewPassword: false,

    password: null,
    newPassword: null,
    repeatNewPassword: null,

    rules: {
      required: v => !!v || 'Не может быть пустым',
    },
  }),

  methods: {
    submit: function () {
      let data = {
        password: this.password,
        newPassword: this.newPassword,
        repeatNewPassword: this.repeatNewPassword,
      }

      // TODO: заглушка на смену пароля
      this.$store.dispatch('changePassword', data)
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
    }
  },

  components: {
    FormSubmitButton,
  }
}
</script>
