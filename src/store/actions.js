/** 2019/2/25
 *author:zhanglibing
 *email:1053081179@qq.com
 *功能:
 */

import mutations from './mutations.js'

export default {
	changeCountryId ({commit}) {
		commit('changeCountryId');
	},
	changeCountryName ({commit}) {
		commit('changeCountryName');
	},
	changeClassifyId ({commit}) {
		commit('changeClassifyId');
	},
	changeClassifyName ({commit}) {
		commit('changeClassifyName');
	}
}
