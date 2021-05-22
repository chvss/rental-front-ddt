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
                <div
                    v-for="(rental, i) in rentals"
                    :key="i"
                    class="mb-4"
                >
                    <v-card
                        class="mx-auto"
                        outlined
                    >
                        <v-list-item three-line>
                            <v-list-item-content>
                                <div class="overline">
                                    #{{ i + 1 }}
                                </div>
                                <v-list-item-title class="headline">
                                    {{ rental.name }}
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    {{ rental.description }}
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>

                        <v-card-actions>
                            <default-button v-on:button-click="edit" text="Редактировать"></default-button>
                        </v-card-actions>
                    </v-card>
                </div>

                <v-row justify="center" class="mt-4">
                    <v-dialog
                        v-model="dialog"
                        persistent
                        max-width="600px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                color="red"
                                active-class="text-accent"
                                text
                                v-bind="attrs"
                                v-on="on"
                            >
                                Добавить филиал
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">Филиал</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col
                                            cols="12"
                                            sm="6"
                                            md="4"
                                        >
                                            <v-text-field
                                                label="Legal first name*"
                                                required
                                            ></v-text-field>
                                        </v-col>
                                        <v-col
                                            cols="12"
                                            sm="6"
                                            md="4"
                                        >
                                            <v-text-field
                                                label="Legal middle name"
                                                hint="example of helper text only on focus"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col
                                            cols="12"
                                            sm="6"
                                            md="4"
                                        >
                                            <v-text-field
                                                label="Legal last name*"
                                                hint="example of persistent helper text"
                                                persistent-hint
                                                required
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field
                                                label="Email*"
                                                required
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field
                                                label="Password*"
                                                type="password"
                                                required
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                                <small>*indicates required field</small>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="blue darken-1"
                                    text
                                    @click="dialog = false"
                                >
                                    Close
                                </v-btn>
                                <v-btn
                                    color="blue darken-1"
                                    text
                                    @click="dialog = false"
                                >
                                    Save
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-row>

            </v-col>
        </v-row>
    </div>
</template>

<script>
import PageHeader from '@/components/blocks/PageHeader';
import DefaultButton from '@/components/elements/DefaultButton';
import BusinessAccountInfoForm from '@/components/forms/BusinessAccountInfoForm';
// import BusinessAccountRentalForm from '@/components/forms/BusinessAccountRentalForm';

export default {
    name: 'BusinessAccount',

    data() {
        return {
            dialog: false,

            rentals: [
                {
                    id: 1,
                    name: 'Спортшкола',
                    description: 'Отдадим в прокат лыжи',
                },
                {
                    id: 1,
                    name: 'Ледовый дворец',
                    description: 'Приходите к нам кататься с горки',
                },
            ],
        };
    },

    components: {
        PageHeader,
        DefaultButton,
        BusinessAccountInfoForm,
        // BusinessAccountRentalForm,
    },

    methods: {
        edit() {
            console.log('edit');
        },
        addRental() {
            console.log('addRental');
        },
    }
};
</script>
