<script setup lang="ts">
import { onMounted, ref } from "vue";

// import { useMouse } from '@/hooks/mouse';
import { getTableDataApi } from '@/api/table.ts';
import { useTable } from  '@/hooks/index.ts';

const [tableData1, refresh1] = useTable(getTableDataApi);
const [tableData2, refresh2] = useTable(getTableDataApi);
const [tableData3, refresh3] = useTable(getTableDataApi);

onMounted(refresh1);
</script>

<template>
  <div>
    <el-table :data="tableData1" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
    <button @click="refresh1">refresh1</button>
    <el-table :data="tableData2" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
    <button @click="refresh2">refresh2</button>
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
