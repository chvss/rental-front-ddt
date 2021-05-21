<template>
    <div>
        <page-header
            title="Личный кабинет"
            subtitle="Раздел личного кабинета позволяет управлять Вашим аккаунтом и предоставляет актуальную информацию о Вас.">
        </page-header>

        <v-alert
            text
            outlined
            color="teal lighten-2"
            icon="mdi-information-outline"
        >
            Вы можете создать
            <router-link to="/create-business-account" role="menuitem" class="text-decoration-none text-base">
                «Бизнесс-аккаунт»
            </router-link>
            . Это даст вам возможность отдать в прокат ваше оборудование.
        </v-alert>

        <!-- ФОРМЫ СМЕНЫ ЛИЧНЫХ ДАННЫХ И ПАРОЛЯ -->
        <v-row>
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
import PageHeader from '@/components/blocks/PageHeader';
import UserPersonalForm from '@/components/forms/UserPersonalForm';
import UserPasswordForm from '@/components/forms/UserPasswordForm';

export default {
    name: 'Personal',

    components: {
        PageHeader,
        UserPersonalForm,
        UserPasswordForm,
    }
}
</script>
