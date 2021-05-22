<template>
    <v-btn
        :color="color"
        :active-class="activeClass"
        :class="classes"
        text
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
        classes: {
            type: String,
            default: 'mx-4',
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
