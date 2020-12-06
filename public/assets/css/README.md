<p align="center">
	<img width="200" src="/src/static/icon/icon_all.svg"></img>
	<img width="40px" src="/docs/css.svg" alt="build status"></img>
</p>

<p align="center">
	<a href="#"><img src="http://runbot.odoo.com/runbot/badge/flat/1/master.svg" alt="build status"></img></a>
</p>

# Variables

<div align="center">

![#ffffff](https://via.placeholder.com/15/fefefe/000000?text=+) `--main-color`
![#49a078](https://via.placeholder.com/15/49a078/000000?text=+) `--secundary-color`
![#dce1de](https://via.placeholder.com/15/dce1de/000000?text=+) `--dark-color`
![#1f2421](https://via.placeholder.com/15/1f2421/000000?text=+) `--text-color`


`--main-font`:<strong><a href="https://fonts.google.com/specimen/Oswald">Oswaldo</a></strong>
`--main-font-bold`:<strong><a href="https://fonts.google.com/specimen/Oswald">Oswaldo bold</a></strong>
`--secundary-font`:<strong><a href="https://fonts.google.com/specimen/Share+Tech">ShareTech</a></strong>


`--border-simple`:<strong>1px</strong>
`--border-bold`:<strong>3px</strong>

</div>

# Margin

Para incrustar magin se tiene en porcentaje desde 1 hasta el 5 porciento. Para aplicar **margin** se tiene `m[x,y,t,b,l,r]-[1,2,3,4,5]`. Ejemplos:

```html
	<span class="my-1"></span>
	<span class="mb-3"></span>
	<span class="ml-5"></span>
```

# Padding

Para incrustar magin se tiene en porcentaje desde 1 hasta el 5 porciento. Para aplicar **padding** se tiene `m[x,y,t,b,l,r]-[1,2,3,4,5]`. Ejemplos:

```html
	<span class="py-1"></span>
	<span class="pb-3"></span>
	<span class="pl-5"></span>
```

# Card

En este ejemplo se contruyen contenedore horizontales por que tienen la clase `flex-dr`. Si se desea contenedor vertical, cambiar la clase por `flex-dc`. (Estas clases tambien se pueden usar para la card view, en ese caso se debe adicionar la clase `vertical` u `horizontal` asi corresponda)
```html
	<div class="card-container-super flex-dr">
		<div class="card-container flex-dr">
			<div class="card vertical flex-dc">
				<span class="badge"></span>
				<div class="_image">
					<img></img>
				</div>
				<div class="_content">
					<h3>Title</h3>
					<h4>Subtitle</h4>
					<content>
					</content>	
				</div>

			</div>
		</div>
	</div>
```
# Iconos

<div align="center">

### .ico-awesome

<a href="https://github.com/FortAwesome/Font-Awesome"><img width="20px" src="../../../docs/github.svg" alt="github repo"></img> Fontawesome</a>

`.ico-web`
`.ico-search`
`.ico-users`
`.ico-marker`
`.ico-phone`
`.ico-wsp`
`.ico-cog`
`.ico-heart`

</div>

Ejemplo:
```html
	<i class="ico-awesome ico-phone"></i>
```

<div align="center">

### .ico-media

<a href="https://github.com/shalinguyen/socialicious"><img width="20px" src="../../../docs/github.svg" alt="github repo"></img> Socialicius</a>

`.ico-fcb`
`.ico-twt`
`.ico-int`
`.ico-lin`

</div>

Ejemplo:
```html
	<i class="ico-media ico-lin"></i>
```

<div align="center">

### .ico-dev

<a href="https://github.com/vorillaz/devicons"><img width="20px" src="../../../docs/github.svg" alt="github repo"></img> Devicons</a>

`.ico-git`
`.ico-css`
`.ico-html`
`.ico-linux`

</div>

Ejemplo:
```html
	<i class="ico-dev ico-git"></i>
```


