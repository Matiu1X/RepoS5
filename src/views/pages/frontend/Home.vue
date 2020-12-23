<template>
    <div>
        <carousel></carousel>
        <body-home></body-home>
    </div>
</template>

<script>
import BodyHome from '../../../components/frontend/main/BodyHome.vue'
import Carousel from '../../../components/frontend/main/Carousel.vue'
export default {
    name: 'PageHome',
    components: { Carousel, BodyHome},
    methods: {

    }
}
</script>