<template>
  <div>
    <page-header
      title="Прокат спортивного оборудования">
    </page-header>

      <v-text-field
          solo
          label="Solo"
          clearable
      >
      </v-text-field>
      
    <OffersList/>
  </div>
</template>

<script>
import PageHeader from '@/components/blocks/PageHeader';
import OffersList from './OffersList';

export default {
    name: 'Home',

    components: {
        OffersList,
        PageHeader,
    }
};
</script>
