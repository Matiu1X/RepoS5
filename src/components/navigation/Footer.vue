<template>
	<footer class="page-footer font-small pt-4">
		<div class="container-fluid text-center text-md-left bg-secundary __all">
			<div class="row">
				<div class="col-sm mt-md-0 mb-3">
	<h5 class="d-flex justify-content-center">Follow us</h5>
	<ul class="align-left">
<dt class="my-3"><i class="ico-media px-5 ico-fcb ico-1 color-primary"></i>Facebook</dt>
<dt class="my-3"><i class="ico-media px-5 ico-twt ico-1 color-primary"></i>Twitter</dt>
<dt class="my-3"><i class="ico-media px-5 ico-int ico-1 color-primary"></i>Instagram</dt>
<dt class="my-3"><i class="ico-media px-5 ico-lin ico-1 color-primary"></i>Linkein</dt>
	</ul>
				</div>
				<div class="col-sm mb-md-0 mb-3">
	<h5 class="d-flex justify-content-center">Webpage</h5>
	<ul class="align-left">
<dt class="my-3"><a href="#Home"><i class="ico-awesome px-5 ico-heart ico-1 color-primary"></i>Home</a></dt>
<dt class="my-3"><a href="#Services"><i class="ico-awesome px-5 ico-cogs ico-1 color-primary"></i>Services</a></dt>
<dt class="my-3"><a href="#News"><i class="ico-awesome px-5 ico-web ico-1 color-primary"></i>News</a></dt>
<dt class="my-3"><a href="#Team"><i class="ico-awesome px-5 ico-users ico-1 color-primary"></i>Team</a></dt>        
	</ul>
				</div>
				<div class="col-sm mb-md-0 mb-3">
	<h5 class="d-flex justify-content-center">Development</h5>
	<ul class="align-left">
<dt class="my-3"><a href="https://github.com/fuf-herNef/Moubi-vue"><i class="ico-dev px-5 ico-git ico-1 color-primary"></i>Repository</a></dt>
<dt class="my-3"><a href="https://github.com/fuf-herNef/Moubi-vue/projects/1"><i class="ico-dev px-5 ico-linux ico-1 color-primary"></i>Project Scrum</a></dt>
<dt class="my-3"><a href="https://github.com/fuf-herNef/Moubi-vue/blob/main/README.md"><i class="ico-dev px-5 ico-html ico-1 color-primary"></i>Project Doc</a></dt>
	</ul>
				</div>
			</div>
		
		</div>
		<div class="footer-end bg-dark __all">	
		<div id="dev-footer"><i class="ico-awesome ico-heart px-5 color-complementary __all"></i></div>
		</div>
	</footer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'NavFooter',
	computed: {
		...mapGetters({
			loginUser: 'doneUser'
		})
	}
}
</script>

<style scoped>  

</style>
