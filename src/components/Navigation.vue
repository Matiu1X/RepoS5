<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light mw-100">
		<a class="navbar-brand color-secundary" href="#home">
			<img src="../static/icon/icon_picto.svg" height="30" alt="moubi"> MÖBI
		</a>
		<button class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse bg-light" id="navbarSupportedContent">
			<ul class="nav justify-content-end bg-light ml-auto">
				<li class="nav-item mx-4 bg-light">
					<a class="nav-link" href="#services">Services</a>
				</li>
				<li class="nav-item mx-4 bg-light">
					<a class="nav-link" href="#news">News</a>
				</li>
				<li class="nav-item mx-4 bg-light">
					<a class="nav-link" href="#team">Team</a>
				</li>
				<li class="nav-item mx-4 bg-light">
					<a class="nav-link" href="#home">Home</a>
				</li>
			</ul>
		</div>
	</nav>	
</template>

<script>
export default {
	name: 'Navigation',
}
</script>

<style scoped>

</style>
