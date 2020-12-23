<template>
    <div class="div-p">
        <img src="@/static/img/Linea-inf.svg" class="img-inf">
        <div class="sub">
            <h2 class="subsub sub1">Beneficios del</h2>
            <h2 class="subsub sub2">Análisis de Datos</h2>
            <h2 class="subsub sub3">aplicado a la</h2>
            <h2 class="subsub sub4">Recordación de Marca</h2>
        </div>
        <div>
            <h2 class="infsub sub-inf1">Toma de decisiones</h2>
            <p class="pinf pinf1">El análisis de datos sobre los clientes ayuda a reducir los riegos y pensar de forma inteligente las estratégias a poner en acción.</p>
        </div>
        <div>
            <h2 class="infsub sub-inf2">Mejora en eficiencia y reducción de costos</h2>
            <p class="pinf pinf2">La información obtenida nos permite saber qu eproductos o servicios prefieren los clientes y porqué.</p>
        </div>
        <div>
            <h2 class="infsub sub-inf3">Categorización de clientes</h2>
            <p class="pinf pinf3">Los datos obtenidos sobre cada cliente otroga una visualización más personal y nos permite ser  recordados por más clientes.</p>
        </div>
        <div>
            <h2 class="infsub sub-inf4">Ingresos adicionales</h2>
            <p class="pinf pinf4">Los perfiles y estrategías creada por el estudio de los datos se pueden vender a otrascompañias.</p>
        </div>
        <div>
            <h2 class="infsub sub-inf5">Ventajas competitivas</h2>
            <p class="pinf pinf5">Gracias a la información se tiene conocimiento sobre los clientes y nos permiten fijar precios y tendencias.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "BodyInfo"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Nunito:wght@200;600&display=swap');
.div-p{
    display: flex;
    flex-direction: column;
    background-color: #FFD5FF;;
    position: relative;
    top: 48px;
    width: 1320px;
    height: 900px;
}
.img-inf{
    position: relative;
    left: 20px;
    top: 96px;
    width: 1150px;
}
.sub{
    position: absolute;
    width: 750px;
    height: 200px;
    left: 744px;
    top: 30px;
}
.subsub{
    font-family: Comfortaa;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 40px;
    color: #8BB8A8;
}
.sub1{
    position: absolute;
    width: 200px;
    height: 40px;
    
}
.sub2{
    position: absolute;
    width: 200px;
    height: 40px;
    top: 40px;
    left: 100px;
}
.sub3{
    position: absolute;
    width: 200px;
    height: 40px;
    top: 80px;
    left: 250px;
}
.sub4{
    position: absolute;
    width: 200px;
    height: 40px;
    top: 120px;
    left: 330px;
}
.infsub{
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    color: #000000;
}
.sub-inf1{
    position: absolute;
    width: 255px;
    height: 38px;
    left: 218px;
    top: 21px;
    
}
.sub-inf2{
    position: absolute;
    width: 317px;
    height: 76px;
    left: 55px;
    top: 327px;
}
.sub-inf3{
    position: absolute;
    width: 317px;
    height: 76px;
    left: 620px;
    top: 194px;
}
.sub-inf4{
    position: absolute;
    width: 253px;
    height: 38px;
    left: 544px;
    top: 561px;
}
.sub-inf5{
    position: absolute;
    width: 274px;
    height: 38px;
    left: 930px;
    top: 432px;
}
.pinf{
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #000000;
} 
.pinf1{
    position: absolute;
    width: 350px;
    height: 132px;
    left: 218px;
    top: 59px;
}
.pinf2{
    position: absolute;
    width: 350px;
    height: 132px;
    left: 55px;
    top: 400px;
}
.pinf3{
    position: absolute;
    width: 350px;
    height: 132px;
    left: 620px;
    top: 271px;
}
.pinf4{
    position: absolute;
    width: 350px;
    height: 132px;
    left: 544px;
    top: 629px;
}
.pinf5{
    position: absolute;
    width: 350px;
    height: 132px;
    left: 930px;
    top: 500px;
}
</style>