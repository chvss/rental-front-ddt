<template>
  <v-footer
    padless
    class="footer"
  >
    <v-card
      flat
      tile
      class="text-center"
    >
      <!--      <v-list class="container d-flex text-left justify-space-around">-->
      <!--        <template v-for="(item) in items">-->
      <!--          <v-list-item-->
      <!--            :key="item.title"-->
      <!--          >-->
      <!--            <v-list-item-content>-->
      <!--              <v-list-item-title v-html="item.title"></v-list-item-title>-->
      <!--              <v-list-item-subtitle v-for="(link, i) in item.links" :key="i">-->
      <!--                {{ link.title }}-->
      <!--              </v-list-item-subtitle>-->
      <!--            </v-list-item-content>-->
      <!--          </v-list-item>-->
      <!--        </template>-->
      <!--      </v-list>-->

      <div class="container text-gray">
        <v-card-text class="pt-4">
          Какой-то интересный текст если его придумаем то можно будет добавить что бы забить это расстояние или
          придумать
          что то другое более интересное. Габросал столбцы с ссылками, можно будеи их раскоментить в компоненте если
          дойдут до этого руки. В любом случае будем исходить из оставшегося времени.
        </v-card-text>

        <v-card-text class="brd-t-light">
          {{ new Date().getFullYear() }} — <strong>DDT</strong>
        </v-card-text>
      </div>
    </v-card>
  </v-footer>
</template>

<script>
export default {
    name: 'Footer',

    data() {
        return {
            items: [
                {
                    title: 'Расскажем',
                    links: [
                        {
                            title: 'Отзывы',
                            href: '#',
                        }
                    ]
                },
                {
                    title: 'Поддержим',
                    links: [
                        {
                            title: 'Телеграм канал',
                            href: '#',
                        },
                        {
                            title: 'Помощь',
                            href: '#',
                        },
                        {
                            title: 'Оставить предложение',
                            href: '#',
                        },
                    ]
                },
                {
                    title: 'Поможем',
                    links: [
                        {
                            title: 'Инструкции',
                            href: '#',
                        },
                        {
                            title: 'Вопросы ответы',
                            href: '#',
                        },
                        {
                            title: 'Наш блог',
                            href: '#',
                        },
                    ]
                },
            ],
        }
    }
}
</script>

<style scoped>

</style>
