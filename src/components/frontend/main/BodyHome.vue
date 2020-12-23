<template>
    <v-container>
            <v-row no-gutters>
                <v-col class="mt-5"><!-- columna izquierda -->
                    <v-container>
                        <v-row no-gutters>
                            <v-col sm="4" cols="12" align-self="center">
                                <img src="@/static/icon/money-growth.svg" style="width:5rem;" class="ml-5">
                            </v-col>
                            <v-col sm="4" cols="12">
                                <img id="vector-pink-arrow" src="@/static/img/Vector-pink.png" style="width:187px;">
                            </v-col>
                            <v-col sm="4" cols="12">
                                <v-card id="vector-pink" elevation="0" style="width:200px;">
                                    <v-card-text class="text-center">Optimización de estrategías de venta y manejo de stock, basado en el análisis predictivo según las tendencias y patrones.</v-card-text>
                                    <h5 class="text-center">TECNICO S.A<br><br></h5>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-container>
                        <v-row no-gutters>
                            <v-col sm="4" cols="12" align-self="center">
                                <img src="@/static/icon/data.svg" style="width:5rem;" class="ml-5">
                            </v-col>
                            <v-col sm="4" cols="12">
                                <img id="vector-yellow-arrow" src="@/static/img/Vector-yellow.png" style="width:185px;">
                            </v-col>
                            <v-col sm="4" cols="12">
                                <v-card id="vector-yellow" elevation="0" style="width:200px;">
                                    <v-card-text class="text-center">Disminución del 1.3% de pérdidas anuales en negociaciones nacionales e internacionales.</v-card-text>
                                    <h5 class="text-center">INVERSO S.A.S<br><br></h5>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
                <v-col>
                    <h3 style="padding-top:1rem; padding-left:2rem;">CASOS<br>DE EXITO</h3>
                    <v-container style="padding-top:5rem;">
                        <v-row no-gutters>
                            <v-col sm="4" cols="12">
                                <v-card id="vector-purple" elevation="0" style="width:200px;">
                                    <v-card-text class="text-center">Rediseño minimalista del logo de la marca y redecoración de tiendas físicas aumentando el 3% en ventas mensuales.</v-card-text>
                                    <h5 class="text-center">HOMETRACK S.A.S<br><br></h5>
                                </v-card>
                            </v-col>
                            <v-col sm="4" cols="12">
                                <img id="vector-purple-arrow" src="@/static/img/Vector-purple.png" style="width:185px;">
                            </v-col>
                            <v-col sm="4" cols="12" align-self="center">
                                <img src="@/static/icon/marketing.svg" style="width:5rem;" class="ml-5">
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>
    </v-container>    
</template>

<script>
export default {
    name: 'Body',
}
</script>

<style scoped>
    #vector-pink{
        background-color: #FFD5FF;
    }
    #vector-pink-arrow{
        height: 150px;
    }
    #vector-yellow{
        background-color: #FDF5BF;
    }
    #vector-yellow-arrow{
        height: 150px;
    }
    #vector-purple{
        background-color: #B47EB3;
    }
    #vector-purple-arrow{
        height: 150px;
        padding-top: 1rem;
    }
</style>