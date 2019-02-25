/** 2019/2/25
 *author:zhanglibing
 *email:1053081179@qq.com
 *功能:
 */

import Vue from 'vue';
import VueX from 'vuex';

Vue.use(VueX);

import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
import state from './state.js'

export default new VueX.Store({
    actions,
    mutations,
    getters,
    state
});
