<template>
  <div id="app">

    <ComponenteNav />
    <ComponenteHeader />
    <ComponenteFooter />

 
  </div>
</template>

<script>

import ComponenteFooter from './components/ComponenteFooter.vue'
import ComponenteNav from './components/ComponenteNav.vue'
import ComponenteHeader from './components/ComponenteHeader.vue'


export default {
  name: 'App',
  components: {
    ComponenteFooter,
    ComponenteNav,
    ComponenteHeader
  }
}
</script>

