<template>
    <v-app>
        <notifications group="common"/>
        <Header/>
        <Main/>
        <Footer/>
    </v-app>
</template>

<script>
import Header from '@/components/base/Header';
import Main from '@/components/base/Main';
import Footer from '@/components/base/Footer';

import {mapActions, mapGetters} from 'vuex';

export default {
    name: 'App',

    data: () => ({}),

    components: {
        Header,
        Main,
        Footer,
    },

    computed: {
        ...mapGetters([
            'isLoggedIn',
        ])
    },

    methods: {
        ...mapActions([
            'fetchUser',
        ])
    },

    created: function () {
        if (this.isLoggedIn) {
            this.fetchUser();
        }
    }
};
</script>
