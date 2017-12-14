<template>
	<div id="header">
		<div class="logo">
			Self Components
			<!-- <span class="username">{{name}}</span> -->
		</div>
		<div class="user">
			<img class="avatar" src="../assets/images/avatar.jpg" alt="avatar">
			<span class="username">{{name}}</span>
		</div>
	</div>
</template>

<script>

export default {
	
	data() {
		return {
			name: 'self components'
		}
	},
	created() {
		
	},
	methods: {
		
	}
}
</script>

<style scoped>
#header{
	position: relative;
	height: 80px;
	line-height: 80px;
	display: flex;
	padding: 0 20px;
	justify-content: space-between;
	z-index: 12;
}
.logo{
	font-size: 26px;
	font-weight: 600;
}
.user{
	font-size: 16px;
	overflow: hidden;
}
.user .avatar{
	width: 50px;
	height: 50px;
	border-radius: 50%;
	vertical-align: middle;
	margin-right: 10px;
	display: inline-block;
}
.user .username{
	display: inline-block;
	color: #fff;
	vertical-align: middle;
}
</style>