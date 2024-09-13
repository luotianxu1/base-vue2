import Vue from "vue"
import Vuex from "vuex" //引入插件并使用插件
import countAbout from "./Count"
import personAbout from "./Person"

Vue.use(Vuex)

//创建并导出store
export default new Vuex.Store({
	modules: {
		countAbout,
		personAbout
	}
})
