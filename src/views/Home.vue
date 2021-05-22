<template>
  <div>
    <page-header
      title="Прокат спортивного оборудования">
    </page-header>
      
    <Offers/>
  </div>
</template>

<script>
import PageHeader from '@/components/blocks/PageHeader';
import Offers from './Offers';

export default {
    name: 'Home',

    components: {
        Offers,
        PageHeader,
    }
};
</script>
