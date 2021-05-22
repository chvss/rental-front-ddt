<template>
    <div>
        <Yam
            :is-selectable="true"
            :start-coords="coords"
            :rental-points="allRentalsCoords"
        />
    </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex';
import Yam from '../components/elements/Yam';

export default {
    name: 'TestMaps',
    components: {Yam},
    data: () => ({
        coords: [54.629571, 39.741884]
    }),
    computed: {
        ...mapState([
            'companies',
        ]),
        ...mapGetters([
            'allRentalsCoords',
        ]),
    },
};
</script>
