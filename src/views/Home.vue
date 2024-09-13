<template>
	<div>
		<h1>当前求和为：{{ sum }}</h1>
		<h2>当前求和放大十倍后为：{{ bigSum }}</h2>
		<h3>我在{{ school }}学习{{ subject }}</h3>
		<select v-model.number="addnum">
			<option value="1" checked>1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="JIA(addnum)">+</button>
		<button @click="JIAN(addnum)">-</button>
		<button @click="oddAdd(addnum)">当前求和为奇数再加</button>
		<button @click="waitAdd(addnum)">等1秒再加</button>

		<h2 style="color: red">Count里边读personList</h2>
		<ul style="color: red">
			<li v-for="p in personList" :key="p.id">{{ p.name }}</li>
		</ul>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex"
export default {
	name: "Count",
	data() {
		return {
			addnum: 1
		}
	},
	computed: {
		personList() {
			return this.$store.state.personAbout.personList
		},
		...mapState("countAbout", ["sum", "school", "subject"]),
		...mapGetters("countAbout", { bigSum: "bigSum" })
	},
	methods: {
		...mapMutations("countAbout", ["JIA", "JIAN"]),
		...mapActions("countAbout", { oddAdd: "oddAdd", waitAdd: "waitAdd" })
	},
	mounted() {
		console.log(this.$store)
	}
}
</script>
