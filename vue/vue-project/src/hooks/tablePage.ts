// import { ref } from "vue"
// import { usePagination } from "./paginaion"

// export function useTable<T>( api: (params: any) => Promise<T>,)  {
//   const [pagination, setTotal] = usePagination(() => refresh());
//   const data = ref([]);

//   const refresh = () => {
//     return api({ page: pagination.current, limit: pagination.size }).then(res => {
//       data.value = res.data;
//       setTotal(res.total);
//     });
//   };
//   return [data, refresh, pagination];
// }

import { ref } from "vue";
import { get, has, defaults } from "lodash";
import { usePagination } from "./paginaion";
type keyPath = Array<string> | string;
export function useTablePage<T>(
  api: (params: any) => Promise<T>,
  params?: object | (() => object),
  options?: {
    path?: { data?: keyPath; total?: keyPath; page?: string; size?: string };
    immediate?: boolean;
  }
) {
  // 参数处理
  defaults(options, {
    path: { data: "data", total: "total", page: "page", limit: "limit" },
    immediate: false
  });

  const [pagination,  setTotal] = usePagination(() => refresh());
  const loading = ref(false);
  const data = ref([]);

const refresh = (extraData?: object | (() => object)) => {
  const requestData = {
    [options?.path?.page as string]: pagination.current,
    [options?.path?.limit as string]: pagination.size
  };
  if (params) {
    if (typeof params === "function") {
      Object.assign(requestData, params());
    } else {
      Object.assign(requestData, params);
    }
  }
  loading.value = true;
  return api(requestData)
    .then(res => {
      data.value = get(res, options!.path?.data, []);
      setTotal(get(res, options!.path?.total, 0));
      if (!has(res, options!.path?.data) || !has(res, options!.path?.total)) {
        console.warn("useTable：响应数据缺少所需字段");
      }
    })
    .finally(() => {
      loading.value = false;
    });
};

options!.immediate && refresh();

return [data as T, refresh, loading, pagination];
}
