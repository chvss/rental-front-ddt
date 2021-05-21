<template>
  <v-app>
    <Header/>
    <Main/>
    <Footer/>
  </v-app>
</template>

<script>
import Header from '@/components/base/Header';
import Main from '@/components/base/Main';
import Footer from '@/components/base/Footer';

export default {
    name: 'App',

    data: () => ({}),

    components: {
        Header,
        Main,
        Footer,
    }
};
</script>
