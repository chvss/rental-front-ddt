<template>
  <v-btn
    :to="href"
    :color="color"
    :active-class="activeClass"
    :class="classes"
    icon
    plain
  >
    <v-badge
      v-if="badgeValue > 0"
      :content="badgeValue"
      color="red accent-1"
      overlap
    >
      <v-icon>{{ icon }}</v-icon>
    </v-badge>
    <v-icon v-else>{{ icon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
    name: 'HeaderButton',

    props: {
        icon: {
            type: String,
            required: true,
        },
        badgeValue: {
            type: Number,
            default: 0,
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
};
</script>
