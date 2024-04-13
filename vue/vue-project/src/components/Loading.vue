<template>
    <div class="loading" v-show="pros.isShow">
        <p>Loading...</p>
    </div>
</template>

<script setup>
    const pros = defineProps(['isShow'])
</script>

<style>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #f5f5f5;
}
</style>
