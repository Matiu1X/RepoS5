<template>
    <v-footer color="#8BB8A8">
        <v-container>
            <v-row no-gutters="true">
                <v-col class="mt-5" align-self="auto">
                    <img src="@/static/icon/ionics/logo-facebook.svg" style="width:2.7rem;">
                    <img src="@/static/icon/ionics/logo-instagram.svg" style="width:2.7rem;">
                    <img src="@/static/icon/ionics/logo-github.svg" style="width:2.7rem;">
                    <img src="@/static/icon/ionics/logo-linkedin.svg" style="width:2.7rem;">
                </v-col>
                <v-col>
                    <h3 id="titulo">Interact-Data</h3>
                    <p>Calle 45 # 59-120 Ed.Millar 2614 | Medellín Colombia<br>
                        (57-4) 365 78 95| (57) 322 598 4510<br>
                        info@interctdata.com | servicio@interactdata.com
                    </p>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script>
export default {
    name : 'Pie'
}
</script>
<style scoped>
    #titulo{
        color: black;
    }
</style>