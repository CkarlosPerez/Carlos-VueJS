<template>
  <div>
      <button @click="$store.commit('quitarSabor', 'Pastel Arcoiris')">restar sabor</button>
  </div>
</template>

<script>
import Adornos from "../components/Adornos.vue"

export default {
    name: 'PasteleroView',
    components:{
        Adornos
    }
}
</script>