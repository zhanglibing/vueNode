/** 2019/2/25
 *author:zhanglibing
 *email:1053081179@qq.com
 *功能:
 */

import state from './state.js'

export default {
    countryId (state) {
		return state.countryId;
	},
	countryName (state) {
		return state.countryName;
	},
	classifyId (state) {
		return state.classifyId;
	},
	classifyName (state) {
		return state.classifyName;
	}
}
