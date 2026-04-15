<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation

    <p>{{ contador }}</p>
    <button @click="incrementar">Incrementar</button>
     <button @click="decrementar">Decrementar</button>
  </p>
</template>

// for composition API style use always setup keyword
<script setup>
import { ref } from "vue";
const contador = ref(0);
const incrementar =() => {
  contador.value++;
}
const decrementar =() => {
  contador.value--;
}
</script>

<style scoped>
p{
  color: red;
}

</style>
