<template>
  <div class="page-header">
    <div class="page-title display-1 mb-4 text-center">
      {{ title }}
    </div>
    <div v-if="subtitle" class="page-subtitle text-center">
      {{ subtitle }}
    </div>
    <v-divider class="width-50 mt-6 mx-auto"></v-divider>
  </div>
</template>

<script>
export default {
    name: 'PageHeader',

    props: {
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
        },
    },
}
</script>
