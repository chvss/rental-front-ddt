import Vue from 'vue';
import Vuex from 'vuex';

import state from '@/store/state';
import mutations from '@/store/mutations';
import actions from '@/store/actions';
import getters from '@/store/getters';

import Offer from './offers';

Vue.use(Vuex);

// TODO: Успешный ответ, раскоментить если потребуется
// function successResponse(additionalResponseObject) {
//   return Object.assign({status: 'ok'}, additionalResponseObject)
// }

// TODO: Ответ об ошибке, раскоментить если потребуется
// function errorResponse(additionalResponseObject) {
//   return Object.assign({status: 'fail'}, additionalResponseObject)
// }


// TODO: Уведомление, раскоментить если потребуется
// function successNotify(text, title = 'Успешно', type = 'success') {
//   Vue.notify({
//     group: 'common',
//     type: type,
//     title: title,
//     text: text,
//   })
// }

// TODO: Уведомление, раскоментить если потребуется
// function errorNotify(text, title = 'Ошибка', type = 'error') {
//   Vue.notify({
//     group: 'common',
//     type: type,
//     title: title,
//     text: text,
//   });
// }

export default new Vuex.Store({
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
    modules: {
        Offer
    }
});
