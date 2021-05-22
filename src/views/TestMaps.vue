<template>
    <div>
        <Yam
            :is-selectable="true"
            :start-coords="centerMap"
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
    computed: {
        ...mapState([
            'companies',
            'centerMap',
        ]),
        ...mapGetters([
            'allRentalsCoords',
        ]),
    },
};
</script>
