<template>
  <div>
    <page-header
      title="Прокат спортивного оборудования">
    </page-header>
      <v-icon>fas fa-search</v-icon>
      <v-text-field
          solo
          label="Поиск"
          clearable
          v-model="searchValue"
      >

      </v-text-field>
      
    <OffersList :filteredOffersList="filteredOffersList"/>
  </div>
</template>

<script>
import PageHeader from '@/components/blocks/PageHeader';
import OffersList from './OffersList';
import {mapState} from 'vuex';

export default {
    name: 'Home',
    data: function () {
        return {
            searchValue: '',
        };
    },
    components: {
        OffersList,
        PageHeader,
    },
    methods: {
        search() {}
    },
    computed: {
        ...mapState('Offer', [
            'offersList'
        ]),
        filteredOffersList() {
            return this.offersList.filter(item => item.product.toLowerCase().includes(this.searchValue.toLowerCase()));
        }
    }
};
</script>
