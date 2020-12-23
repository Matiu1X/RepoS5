<template>
	<section id="admin">
		<div class="d-flex flex-row justify-content-center my-5">
			<h2 class="titulo">ADMINISTRADOR</h2>     
			<i class="ico-awesome ico-heart color-black"></i>
		</div>
		<div>
			<v-container>
				<v-simple-table dark>
					<template v-slot:default>
					<thead>
						<tr>
						<th class="text-left">
							Name
						</th>
						<th class="text-left">
							Calories
						</th>
						<th class="text-left">
							Actions
						</th>
						</tr>
					</thead>
					<tbody>
						<tr
						>
						<td>item a</td>
						<td>item b</td>
						<td>
							<button type="button" class="btn btn-info"><img src="@/static/icon/key/Edit.svg"></button>
							<button type="button" class="btn btn-danger ml-1"><img src="@/static/icon/key/Trash.svg"></button>
						</td>
						</tr>
					</tbody>
					</template>
				</v-simple-table>
			</v-container>
		</div>

	</section>
</template>

<script>

export default {
	name: 'PageAdmin',
}
</script>

<style scoped>
	.titulo{
		font-family: Comfortaa;
		color: black;
	}
	th{
		font-family: Comfortaa;
	}
	button{
		font-family: Comfortaa;
	}
	td{
		font-family: Comfortaa;
		color: white;
	}
</style>
