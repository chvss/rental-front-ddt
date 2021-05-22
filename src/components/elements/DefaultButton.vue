<template>
    <v-btn
        :color="color"
        :active-class="activeClass"
        text
        class="mt-2"
        @click="$emit('button-click')"
    >
        {{ text }}
    </v-btn>
</template>

<script>
export default {
    name: 'DefaultButton',

    props: {
        text: {
            type: String,
            default: 'Сохранить',
        },
        color: {
            type: String,
            default: 'red',
        },
        activeClass: {
            type: String,
            default: 'text-accent',
        },
        event: {
            type: String,
            default: 'button-click',
        }
    },
};
</script>
