<template>
  <v-btn
    :to="href"
    :color="color"
    :active-class="activeClass"
    :class="classes"
    text
    plain
  >
    {{ text }}
  </v-btn>
</template>

<script>
export default {
    name: 'HeaderButton',

    props: {
        text: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            default: '#444444',
        },
        classes: {
            type: String,
            default: 'mx-4',
        },
        href: {
            type: String,
            default: '#',
        },
        activeClass: {
            type: String,
            default: 'text-accent',
        }
    },
}
</script>
