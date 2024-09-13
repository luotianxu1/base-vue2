<template>
	<div id="app">
		<h1>{{ message }}</h1>
		<button @click="changeMessage">Change Message</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			message: "Hello Vue!"
		}
	},
	methods: {
		changeMessage() {
			this.message = "Message changed!"
		}
	}
}
</script>

<style></style>
