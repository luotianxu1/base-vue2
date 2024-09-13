export default {
	namespaced: true,
	state: {
		sum: 0,
		school: "HNUST",
		subject: "前端"
	},
	mutations: {
		JIA(state, value) {
			console.log("mutations中的JIA被调用了 ", state, value)
			state.sum += value
		},
		JIAN(state, value) {
			state.sum -= value
		}
	},

	actions: {
		oddAdd(context, value) {
			context.commit("JIA", value)
		},
		waitAdd(context, value) {
			setTimeout(() => {
				context.commit("JIA", value)
			}, 1000)
		}
	},
	getters: {
		bigSum(state) {
			return state.sum * 10
		}
	}
}
