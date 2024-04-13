<template>
  <div :style="{ padding: '10px' }">
    虚拟列表
    <div
      class="scroll-box"
      ref="scrollBox"
      @scroll="handleScroll"
      :style="{ height: scrollHeight + 'px' }"
    >
      <div
        class="virtual-list"
        :style="{ paddingTop: paddingTop + 'px', paddingBottom: paddingBottom + 'px' }"
      >
        <div
          v-for="(item, index) in visibleItems"
          :key="index"
          :style="{ height: itemHeight + 'px' }"
        >
          <slot name="item" :item="item" :index="index"></slot>
        </div>
      </div>
      <Loading :is-show="isShowLoad" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import Loading from './Loading.vue';
import { ElMessage } from 'element-plus';
const props = defineProps({
  listData: { type: Array, default: () => [] },
  itemHeight: { type: Number, default: 20 },
  scrollHeight: { type: Number, default: 300 },
  loadMore: { type: Function, required: true },
});

const isShowLoad = ref(false);

const visibleCount = Math.ceil(props.scrollHeight / props.itemHeight) + 1;
const start = ref(0);
const end = computed(() =>
  Math.min(start.value + 2 * visibleCount - 1, renderData.value.length)
);
const paddingTop = computed(() => start.value * props.itemHeight);
const renderData = ref([...props.listData]);
const paddingBottom = computed(
  () => (renderData.value.length - end.value) * props.itemHeight
);
const visibleItems = computed(() => renderData.value.slice(start.value, end.value));
const scrollBox = ref(null);
let lastIndex = start.value;

function rafThrottle(fn) {
  let lock = false;
  return function (...args) {
    if (lock) return;
    lock = true;
    window.requestAnimationFrame(() => {
      console.log('args',args);
      fn.apply(args);
      lock = false;
    });
  };
}


const handleScroll = rafThrottle(() => {
  onScrollToBottom();
  onScrolling();
});

const onScrolling = () => {
  const scrollTop = scrollBox.value.scrollTop;
  let thisStartIndex = Math.floor(scrollTop / props.itemHeight);
  const isSomeStart = thisStartIndex == lastIndex;
  if (isSomeStart) return;
  const isEndIndexOverListLen =
    thisStartIndex + 2 * visibleCount - 1 >= renderData.value.length;
  if (isEndIndexOverListLen) {
    thisStartIndex = renderData.value.length - (2 * visibleCount - 1);
  }
  lastIndex = thisStartIndex;
  start.value = thisStartIndex;
};

const onScrollToBottom = () => {
  const scrollTop = scrollBox.value.scrollTop;
  const clientHeight = scrollBox.value.clientHeight;
  const scrollHeight = scrollBox.value.scrollHeight;
  if (scrollTop + clientHeight >= scrollHeight) {
    loadMore();
  }
};
let loadingLock = false;
let lockLoadMoreByHideLoading_once = false;
const loadMore = async () => {
  if (loadingLock) return;
  if (lockLoadMoreByHideLoading_once) {
    lockLoadMoreByHideLoading_once = false;
    return;
  }
  loadingLock = true;
  isShowLoad.value = true;
  
  setTimeout(async () => {
    const moreData = await props.loadMore().catch((err) => {
      console.error(err);
      ElMessage({
        message: '获取数据失败，请检查网络后重试',
        type: 'error',
      });
      return [];
    });
    if (moreData.length != 0) {
      renderData.value = [...renderData.value, ...moreData];
      handleScroll();
    }
    isShowLoad.value = false;
    lockLoadMoreByHideLoading_once = true;
    loadingLock = false;
  }, 1000);
};



onMounted(() => {
  scrollBox.value.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  scrollBox.value.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.virtual-list {
  position: relative;
}
.scroll-box {
  overflow-y: auto;
}
</style>
