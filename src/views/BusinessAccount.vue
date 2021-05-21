<template>
    <div>
        <page-header
            title="Бизнесс-аккаунт"
            subtitle="Раздел позволяет управлять Вашим Бизнесс-аккаунтом">
        </page-header>

        <!-- ФОРМЫ СМЕНЫ ЛИЧНЫХ ДАННЫХ И ПАРОЛЯ -->
        <v-row>
            <v-col>
                <business-account-info-form></business-account-info-form>
            </v-col>
            <v-col>

            </v-col>
        </v-row>
    </div>
</template>

<script>
import PageHeader from '@/components/blocks/PageHeader';
import BusinessAccountInfoForm from '@/components/forms/BusinessAccountInfoForm';

export default {
    name: 'BusinessAccount',

    data() {
        return {
            rental: [
                {
                    id: 1,
                    name: 'Спортшкола',
                },
                {
                    id: 1,
                    name: 'Спортшкола',
                },
            ],
        };
    },

    components: {
        PageHeader,
        BusinessAccountInfoForm,
    },
};
</script>
