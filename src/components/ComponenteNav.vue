<template>
    <div id="navbar">
		<nav class="navbar navbar-light bg-light">
			<a class="navbar-brand" href="#">
				<img src="../static/icon/icon_picto.svg" width="100" height="30" class="d-inline-block align-top" alt="">
				MÖBI
			</a>
			<ul class="nav justify-content-end ml-auto">
				<li class="nav-item mx-4">
					<a class="nav-link" href="#services">Services</a>
				</li>
				<li class="nav-item mx-4">
					<a class="nav-link" href="#news">News</a>
				</li>
				<li class="nav-item mx-4">
					<a class="nav-link" href="#team">Team</a>
				</li>
				<li class="nav-item mx-4">
					<a class="nav-link" href="#home">Home</a>
				</li>
			</ul>
		</nav>

    </div>
</template>

<script>
    export default {
        name: "ComponenteNav"
    }
</script>

<style scoped>

.nav-item {
	float: right;
	padding-top: 3px;
}

.nav-item a{
	font-size: 1.3em;
	display: block;
	width: 158px;
	text-align: center;
}

	.nav-item a:hover {
    border-bottom: 1px solid #e07a5f;
    font-size: 1.3em;
    transition: 0.3s;
}

.navbar {
	height: 72px;
	border-bottom: 1px solid #49a078;
}

</style>
