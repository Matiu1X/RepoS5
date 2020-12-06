<template>
  <div id="app">
    <ComponenteNav />
    <ComponenteHeader />
    <services-card></services-card>
    <ComponenteFooter />
  </div>
</template>

<script>
import ServicesCard from './components/ServicesCard.vue'

import ComponenteFooter from './components/ComponenteFooter.vue'
import ComponenteNav from './components/ComponenteNav.vue'
import ComponenteHeader from './components/ComponenteHeader.vue'

export default {
  name: 'App',

  components: {
    ComponenteFooter,
    ComponenteNav,
    ComponenteHeader,
    ServicesCard
  }
}
</script>

