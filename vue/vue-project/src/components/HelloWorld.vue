<script setup lang="ts">
import { useMouse } from '@/hooks/index.ts';

const { x, y } = useMouse()
</script>

<template>
  <div class="greetings">
Mouse position is at: {{ x }}, {{ y }}

  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
