<template>
    <div>
        <router-link to="/seleccion">Regresar</router-link> |
        <router-link to="/cliente">Terminar</router-link> 
        <Contacto/>
    </div>
</template>

<script>
import Contacto from "../components/Contacto.vue"


export default {
    name: 'PedidoView',
    components:{
        Contacto
    }
}
</script>
