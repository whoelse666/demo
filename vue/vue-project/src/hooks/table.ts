import { ref } from "vue";
export function useTable(api) {
  const data = ref([]);
  const refresh = () => {
    api().then((res) => (data.value = res));
  };
  refresh();
  return [data, refresh];
}