<template>
    <div>
        <page-header
            title="Создание «Бизнесс-аккаунта»"
            subtitle="Описать что даст пользователю бизнесс-аккаунт.">
        </page-header>

        <v-layout align-center justify-center>
            <v-flex xs12 sm6 md6>
                <business-account-form-create></business-account-form-create>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import PageHeader from '@/components/blocks/PageHeader';
import BusinessAccountFormCreate from '@/components/forms/BusinessAccountFormCreate';

export default {
    name: 'CreateBusinessAccount',

    components: {
        PageHeader,
        BusinessAccountFormCreate,
    }
};
</script>
