<script setup>
import VirtualList from '@/components/VirtualList.vue';

import { onMounted, ref } from 'vue';
let listData = ref([]);
let num = 200;
// 模拟从 API 获取数据
const fetchData = async () => {
  // 这里可以替换成您实际的 API 请求
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      const newData = Array.from({ length: 200 }, (_, index) => `Item ${index}`);
      listData.value = newData;
      resolve();
    }, 500);
  })
}
// 加载更多数据
const loadMore = () => {
  // 这里可以替换成您实际的 API 请求
  return new Promise((resolve) => {
    setTimeout(() => {
      const moreData = Array.from({ length: 30 }, (_, index) => `Item ${num + index}`);
      num += 30;
      resolve(moreData);
    }, 500);
  });
  //模拟请求错误
  // return new Promise((_, reject) => {
  //   setTimeout(() => {
  //     reject('错误模拟');
  //   }, 1000);
  // })
}

onMounted(() => {
   fetchData();
});
</script>

<template>
  <!-- class="virtualContainer" -->
<div>
  <VirtualList v-if="listData.length > 0"
     :listData="listData" :itemHeight="50" :scrollHeight="500" :loadMore="loadMore">
      <template #item="{ item,index }">
        <div class="list-item">
          {{  item }}
        </div>
      </template>
  </VirtualList>
</div>
</template>

<style scoped>
.list-item {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  text-align: center;
}
</style>

