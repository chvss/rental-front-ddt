<template>
    <div>
        <yandex-map
            zoom=10
            :coords="coords"
            @click="getCoordsByClick"
        >
            <ymap-marker
                v-if="isSelectable"
                :key="123"
                :coords="coords"
                marker-id="123"
            ></ymap-marker>
            <div v-else>
                <ymap-marker
                    v-for="item in objects"
                    :key="item.id"
                    marker-id="iem.id"
                    :coords="item.coords"
                ></ymap-marker>
            </div>
        </yandex-map>
    </div>
</template>

<script>
export default {
    name: 'Yam',
    props: {
        startCoords: {
            default: () => []
        },
        isSelectable: {
            default: false
        },
        rentalPoints: {
            default: () => []
        }
    },
    data: function () {
        return {
            objects: this.rentalPoints || [],
            coords: this.startCoords || [],
        };
    },

    methods: {
        getCoordsByClick(e) {
            if (this.isSelectable) {
                this.coords = e.get('coords');
            }
        }
    }
};
</script>