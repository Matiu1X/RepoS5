<template>
    <div>
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="@/static/img/Carousel1.jpeg" class="d-block w-100" alt="..." style="height:25rem;">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Dinámico y Ergonómico</h5>
                         <p>Acceso a tu información facil y rapido, como te gusta</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="@/static/img/Carousel2.jpg" class="d-block w-100" alt="..." style="height:25rem;">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Uso de software especializado</h5>
                        <p>Para el analisis de tu información usamos las mejores herramientas</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="@/static/img/Carousel3.png" class="d-block w-100" alt="..." style="height:25rem;">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Personal especializado</h5>
                        <p>Nuestro personal, completamente profesional, especializado y de confianza.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="@/static/img/Carousel4.jpg" class="d-block w-100" alt="..." style="height:25rem;">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Acceso en todo momento y lugar</h5>
                        <p>Tu información a tu alcance cuando quieras.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="@/static/img/Carousel5.jpg" class="d-block w-100" alt="..." style="height:25rem;">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>!!!Seguridad¡¡¡</h5>
                        <p>Tu información accesible solo para ti y para nosotros.</p>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data () {
      return {
      }
    },
  }
</script>
<style scoped>  
    p{
        color: black;
        background: #FDF5BF;
    }
    h5{
        color: black;
        background: #FDF5BF;
    }
</style>