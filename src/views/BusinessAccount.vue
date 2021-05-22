<template>
    <div>
        <page-header
            title="Бизнесс-аккаунт"
            subtitle="Раздел позволяет управлять вашим Бизнесс-аккаунтом и списком филиалов вашей компании.">
        </page-header>

        <v-row>
            <v-col cols="1" md="1"></v-col>

            <v-col cols="10" md="10">
                <business-account-info-form></business-account-info-form>
                <rentals-list></rentals-list>
            </v-col>

            <v-col cols="1" md="1"></v-col>
        </v-row>
    </div>
</template>

<script>
import PageHeader from '@/components/blocks/PageHeader';
import RentalsList from '@/components/blocks/RentalsList';
import BusinessAccountInfoForm from '@/components/forms/BusinessAccountInfoForm';

export default {
    name: 'BusinessAccount',

    components: {
        PageHeader,
        RentalsList,
        BusinessAccountInfoForm,
    },
};
</script>
