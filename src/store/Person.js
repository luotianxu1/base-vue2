export default {
	namespaced: true,
	state: {
		personList: [{ id: 1, name: "zzy" }]
	},
	getters: {
		firstPersonName(state) {
			return state.personList[0].name
		}
	},
	actions: {
		addPersonHan(context, value) {
			if (value.name.indexOf("韩") === 0) {
				context.commit("ADD_PERSON", value)
			} else {
				alert("添加的人不姓韩！")
			}
		}
	},
	mutations: {
		ADD_PERSON(state, value) {
			state.personList.unshift(value)
		}
	}
}
