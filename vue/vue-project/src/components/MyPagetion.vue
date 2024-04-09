<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
  <button @click="refresh">refresh</button>
  <!-- 分页器 -->
  <el-pagination
    v-model:current-page="pagination.current"
    :page-size="pagination.size"
    layout="total, prev, pager, next"
    :page-sizes="pagination.sizeOption"
    :total="pagination.total"
    @size-change="pagination.onSizeChange"
    @current-change="pagination.onPageChange"
  />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { getTableDataApi1 } from '@/api/page.ts';
import { useTablePage } from '@/hooks/index.ts';
const [tableData, refresh, loading, pagination] = useTablePage(
  getTableDataApi1,
  {
    path: {
      data: 'data',
      total: 'total',
      page: 'page',
      limit: 'limit',
    },
  },
  { immediate: true }
);
</script>
