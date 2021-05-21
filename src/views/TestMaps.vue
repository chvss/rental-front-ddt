<template>
  <yandex-map
      zoom=10
      :coords="coords"
  >
    <ymap-marker
        v-for="item in companies"
        :key="item.id"
        :coords="item.coords"
        marker-id="item.id"
    ></ymap-marker>
  </yandex-map>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: 'TestMaps',
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