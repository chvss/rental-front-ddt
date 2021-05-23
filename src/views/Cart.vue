<template>
  <div>
    <page-header
        title="Бронирование"
        subtitle="В данном разделе представленна история ваших бронирований">
    </page-header>

    <v-alert
        outlined
        type="warning"
        prominent
        border="left"
    >
      Вы забронировали "Лыжи" в кол-ве 2шт у "Ельская СОШ".

      <div class="absolute r-0 b-0">
        <v-btn
            color="red lighten-2"
            text
        >
          Отменить бронирование
        </v-btn>
      </div>
    </v-alert>

    <v-alert
        outlined
        type="success"
        text
    >
      Вы забронировали "Скейт" в кол-ве 1шт у "Ельская СОШ".

      <div class="absolute r-1 b-0">
          21.05.2021
      </div>
    </v-alert>

    <v-alert
        outlined
        type="success"
        text
    >
      Вы забронировали "Велосипед" в кол-ве 1шт у "Прокат спортивного инвентаря".

      <div class="absolute r-1 b-1">
        18.05.2021
      </div>
    </v-alert>

    <v-alert
        outlined
        type="success"
        text
    >
      Вы забронировали "Бассейн" в кол-ве 1шт у "Водный мир".

      <div class="absolute r-1 b-1">
        11.05.2021
      </div>
    </v-alert>
  </div>
</template>

<script>
import PageHeader from '@/components/blocks/PageHeader';

export default {
    name: 'Cart',
    components: {
        PageHeader,
    }
};
</script>
