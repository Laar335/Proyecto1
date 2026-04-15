<template>
  <div>
    <h2>Lista de Tareas</h2>
    <input type="text" v-model="nuevaTarea" @keyup.enter="addTarea" />
    <ul>
      <li v-for="(tarea, index) in tareas" :key="index">
        {{ tarea }}
        <button @click="EraseTask">Borrar tarea</button>
      </li>
    </ul>
  </div>
</template>

// for composition API style use always setup keyword
<script setup>
import { ref } from "vue";
const tareas = ref([]);

const nuevaTarea = ref("");
const addTarea = () => {
  tareas.value.push(nuevaTarea.value);
  nuevaTarea.value = "";
};
const EraseTask = (index) => {
  tareas.value.splice(index, 1);
};
</script>

<style scoped></style>
