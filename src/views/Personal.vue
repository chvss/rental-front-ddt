<template>
  <div>
    <page-header
      title="Личный кабинет"
      subtitle="Раздел личного кабинета позволяет управлять Вашим аккаунтом и предоставляет актуальную информацию о Вас.">
    </page-header>

    <!-- ФОРМЫ СМЕНЫ ЛИЧНЫХ ДАННЫХ И ПАРОЛЯ -->
    <v-row class="px-5">
      <v-col>
        <user-personal-form></user-personal-form>
      </v-col>
      <v-col>
        <user-password-form></user-password-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PageHeader from "@/components/blocks/PageHeader";
import UserPersonalForm from "@/components/forms/UserPersonalForm";
import UserPasswordForm from "@/components/forms/UserPasswordForm";

export default {
  name: "Personal",

  components: {
    PageHeader,
    UserPersonalForm,
    UserPasswordForm,
  }
}
</script>
