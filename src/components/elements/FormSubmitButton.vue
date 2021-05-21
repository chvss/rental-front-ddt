<template>
  <v-btn
    :color="color"
    :active-class="activeClass"
    text
    class="mt-2"
    type="submit"
  >
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  name: "FormSubmitButton",

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
    }
  },
}
</script>
