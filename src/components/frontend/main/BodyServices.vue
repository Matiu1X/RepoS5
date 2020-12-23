<template>
    <div class="img-b">
        <div class="div-titulo">
            <p class="titulo-servios">SERVICIOS</p>
        </div>
        <div class="secciones"> 
            <div class="img-card">
                <img src="@/static/icon/negocios-y-finanzas.svg" class="img1">
                <h2 class="subt-card">Ventas</h2>
                <p class="text-card">Realice un seguimiento de las ventas y servicios de ventas, para así tener un mayor control de los procesos de ventas y teniendo su datos en tiempo real, tendrá a su equipo actualizado y sincronizado.</p>
            </div>
            <div class="img-card">
                <img src="@/static/icon/marketing1.svg" class="img2">
                <h2 class="subt-card">Mercadeo</h2>
                <p class="text-card">Las decisiones actualmente sobre el como proceder en una compañía siempre están basadas en el análisis de datos, incluyendo el desarrollo de estrategías de marketing y como aplicarlas.</p>
            </div>
            <div class="img-card">
                <img src="@/static/icon/money1.svg" class="img3">
                <h2 class="subt-card">Inteligencia Comercial</h2>
                <p class="text-card">Análisis de datos de ventas, compras y transacciones en general para mejorar la eficiencia y reducir los riesgos en la toma de decisiones de forma ágil.</p>
            </div>

        </div>
    </div>
</template>

<script>
    
export default {
    name: "BodyServices"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Nunito:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Nunito:wght@200;600&display=swap');
.img-b{
    display: flex;
    flex-direction: column;
    background-image: url('../../../static/img/BackgroundServImg.svg');
    position: relative;
    top: 48px;
    width: 1320px;
    height: 900px;
}
.div-titulo{
    height: 166px;
    align-items: center;
}
.titulo-servios{
    position: absolute;
    top: 82px;
    right: 525px;
    align-content: center;
    font-family: Comfortaa;
    font-size: 48px;
    color: #000000;
}
.secciones{
    display: flex;
    flex-direction: row;
    top: 320px;
    justify-content: space-evenly;
    width: 100%;
}
.img-card{
    background-image: url('../../../static/img/TarjetaServ.svg'); 
    background-color: transparent;
    position: relative;
    top: 70px;
    width: 297px;
    height: 526.67px;
    justify-content: center;
}
.img1{
    height: 150px;
    position: absolute;
    right: 80px;
    top: 30px;
}
.subt-card{
    width: 100%;
    position: absolute;
    top: 220px;
    font-family: Nunito;
    font-size: 28px;
    color: #000000;
    text-align: center;
    font-weight: 600;
}
.text-card{
    width: 277px;
    position: absolute;
    top: 265px;
    right: 10px;
    text-align: center;
    font-family: Nunito;
    font-weight: normal;
    font-size: 22px;
    color: #000000;
}
.img2{
    height: 150px;
    position: absolute;
    right: 80px;
    top: 30px;
}
.img3{
    height: 150px;
    position: absolute;
    right: 80px;
    top: 30px;
}
</style>