const scrolling = function (to, from, savedPosition) {
	if (savedPosition) {
		return savedPosition

	} else {

		const position = {}
		if (to.hash) {
			console.log('Estoy en el selector')
			position.selector = to.hash
			
			if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
				return position
			}
			
			return false
		}

		return new Promise(resolve => {
			if (to.matched.some(m => m.meta.scrollToTop)) {
				position.x = 0
				position.y = 0
			}
		
			this.app.$root.$once('triggerScroll', () => {
				resolve(position)
			})
		})
	}
};

export {
	scrolling
}
