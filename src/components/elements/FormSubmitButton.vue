<template>
    <v-btn
        :color="color"
        :active-class="activeClass"
        :class="classes"
        text
        type="submit"
    >
        {{ text }}
    </v-btn>
</template>

<script>
export default {
    name: 'FormSubmitButton',

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
            default: '',
        },
        activeClass: {
            type: String,
            default: 'text-accent',
        }
    },
};
</script>
