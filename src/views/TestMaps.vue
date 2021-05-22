<template>
  <Yam
      :is-selectable="true"
      :start-coords="coords"
      :rental-points="companies"
    />
</template>

<script>
import {mapState} from 'vuex';
import Yam from '../components/elements/Yam';

export default {
    name: 'TestMaps',
    components: {Yam},
    data: () => ({
        coords: [54.629571, 39.741884]
    }),
    computed: mapState([
        'companies'
    ])
};
</script>

<style lang="sass">

</style>