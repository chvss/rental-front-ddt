<template>
    <div>
        <page-header
            title="Бизнесс-аккаунт"
            subtitle="Раздел позволяет управлять вашим Бизнесс-аккаунтом и списком филиалов вашей компании.">
        </page-header>

        <v-row>
            <v-col>
                <business-account-info-form></business-account-info-form>
            </v-col>
            <v-col>
                <rentals-list></rentals-list>
            </v-col>
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
