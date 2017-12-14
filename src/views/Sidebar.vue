<template>
	<div class="sidebar">
		<el-menu default-active="1-4-1" class="el-menu-vertical-demo" background-color="rgb(7,17,27)" text-color="#fff" active-text-color="#ffd04b">
		  	<el-submenu index="1">
			    <template slot="title">
			      	<i class="el-icon-location"></i>
			      	<span slot="title">导航一</span>
			    </template>
		      	<el-menu-item index="1-1">选项1</el-menu-item>
		      	<el-menu-item index="1-2">选项2</el-menu-item>
		      	<el-menu-item index="1-3">选项3</el-menu-item>
			    <el-menu-item index="1-4">选项56</el-menu-item>
		  	</el-submenu>

		  	<el-submenu index="2">
		  		<template slot="title">
		  			<i class="el-icon-menu"></i>
			    	<span slot="title">导航二</span>
		  		</template>
			    <el-menu-item index="2-1">选项1</el-menu-item>
		      	<el-menu-item index="2-2">选项2</el-menu-item>
		      	<el-menu-item index="2-3">选项3</el-menu-item>
			    <el-menu-item index="2-4">选项56</el-menu-item>
		  	</el-submenu>
		  	<el-menu-item index="3">
			    <i class="el-icon-setting"></i>
			    <span slot="title">导航三</span>
		  	</el-menu-item>
		</el-menu>
	</div>
</template>

<script>

export default {
	
	data() {
		return {
			
		}
	},

	created() {
		
	},
	
	methods: {
		
	}
}
</script>

<style scoped>
.sidebar{
	position: fixed;
	width: 200px;
	height: 100%;
	z-index: 10;
	border-right: 1px solid #fff;
}
</style>
<style>
	.el-menu{
		border-right: 0 !important;
	}
	.el-menu-item:focus, .el-menu-item:hover{
		background-color: #000 !important;
	}
	.el-submenu__title:hover{
		background-color: #000 !important;
	}
</style>