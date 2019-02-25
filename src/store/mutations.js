/** 2019/2/25
 *author:zhanglibing
 *email:1053081179@qq.com
 *功能:
 */

import getters from './getters.js'

export default {
	changeCountryId (state, countryId) {
		state.countryId = countryId;
	},
	changeCountryName (state, countryName) {
		state.countryName = countryName;
	},
	changeClassifyId (state, classifyId) {
		state.classifyId = classifyId;
	},
	changeClassifyName (state, classifyName) {
		state.classifyName = classifyName;
	}
}
