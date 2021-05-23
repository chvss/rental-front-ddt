<template>
    <v-app-bar
        clipped-left
        fixed
        flat
        class="bg-gray header"
    >
        <div class="container d-flex align-center">
            <v-toolbar-title class="mx-4">
                <router-link to="/" role="menuitem" class="text-decoration-none text-base">
                    <span class="text-accent">Я</span>смогу<span class="text-accent">НА</span>йти<span
                    class="text-accent">О</span>борудование
                </router-link>
            </v-toolbar-title>
            <v-row>
                <header-button
                    text="История"
                    href="/history"
                    v-if="false"
                ></header-button>

                <header-button
                    text="Каталог"
                    href="/catalog"
                ></header-button>

                <header-button
                    text="Личный кабинет"
                    href="/personal"
                ></header-button>

                <header-button
                    text="Бизнесс-аккаунт"
                    href="/business-account"
                    v-if="isBusiness"
                ></header-button>
            </v-row>

            <v-spacer></v-spacer>

            <v-row v-if="!isLoggedIn" class="justify-end">
                <HeaderButton
                    v-for="(item, i) in menuGuestRight"
                    :key="i"
                    :text="item.title"
                    :href="item.href"
                />
            </v-row>
            <v-row v-else class="justify-end">
                <HeaderButtonIcon
                    href="/cart"
                    icon="mdi-calendar-check"
                    :badgeValue=3
                />
                <HeaderButtonIcon
                    href="/favorite"
                    icon="mdi-heart"
                />
                <v-menu
                    left
                    bottom
                    class="mt-12"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            icon
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item @click="logout">
                            <v-list-item-title>Выйти</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-row>
        </div>
    </v-app-bar>
</template>

<script>
import HeaderButton from '@/components/elements/HeaderButton';
import HeaderButtonIcon from '@/components/elements/HeaderButtonIcon';

import {mapGetters} from 'vuex';

export default {
    name: 'Header',
    data: () => ({
        menuGuestRight: [
            {
                title: 'Войти',
                href: '/login'
            },
            {
                title: 'Регистрация',
                href: '/signup'
            },
        ],
    }),

    computed: {
        ...mapGetters([
            'isLoggedIn',
            'isBusiness',
        ])
    },

    methods: {
        logout: function () {
            this.$store.dispatch('logout')
                .then(() => {
                    this.$router.push('/login');
                });
        },
    },

    components: {
        HeaderButton,
        HeaderButtonIcon,
    },

    // TODO: для тесрирования, не забыть удалить!
    created: function () {
        console.log('isLoggedIn: ' + this.isLoggedIn);
    }
};
</script>
