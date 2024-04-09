export const getTableDataApi1 = params => {
  // export const getTableDataApi1 = (page, limit) => {
  const data = [
    {
      date: params.page + "-" + Math.floor(Math.floor(new Date().getDay() * Math.random()*10)),
      name: "Tom",
      address: "No. 189, Grove St, "
    },
    {
      date: params.page + "-" + Math.floor(new Date().getDay() * Math.random()*10),
      name: "Tom",
      address: "No. 189, Grove St, "
    },
    {
      date: params.page + "-" + Math.floor(new Date().getDay() * Math.random()*10),
      name: "Tom",
      address: "No. 189, Grove St, "
    },
    {
      date: params.page + "-" + Math.floor(new Date().getDay() * Math.random()*10),
      name: "Tom",
      address: "No. 189, Grove St, "
    },
    {
      date: params.page + "-" + Math.floor(new Date().getDay() * Math.random()*10),
      name: "Tom",
      address: "No. 189, Grove St, "
    },
    {
      date: params.page + "-" + Math.floor(new Date().getDay() * Math.random()*10),
      name: "Tom",
      address: "No. 189, Grove St, "
    },
    {
      date: params.page + "-" + Math.floor(new Date().getDay() * Math.random()*10),
      name: "Tom",
      address: "No. 189, Grove St, "
    },
    {
      date: params.page + "-" + Math.floor(new Date().getDay() * Math.random()*10),
      name: "Tom",
      address: "No. 189, Grove St, "
    },
    {
      date: params.page + "-" + Math.floor(new Date().getDay() * Math.random()*10),
      name: "Tom",
      address: "No. 189, Grove St, "
    },
    {
      date: params.page + "-" + Math.floor(new Date().getDay() * Math.random()*10),
      name: "Tom",
      address: "No. 189, Grove St, "
    },
    {
      date: params.page + "-" + Math.floor(new Date().getDay() * Math.random()*10),
      name: "Tom",
      address: "No. 189, Grove St, "
    },
    {
      date: params.page + "-" + Math.floor(new Date().getDay() * Math.random()*10),
      name: "Tom",
      address: "No. 189, Grove St, "
    },
    {
      date: params.page + "-" + Math.floor(new Date().getDay() * Math.random()*10),
      name: "Tom",
      address: "No. 189, Grove St, "
    },
    {
      date: params.page + "-" + Math.floor(new Date().getDay() * Math.random()*10),
      name: "Tom",
      address: "No. 189, Grove St, "
    },
    {
      date: params.page + "-" + Math.floor(new Date().getDay() * Math.random()*10),
      name: "Tom",
      address: "No. 189, Grove St, "
    },
    {
      date: params.page + "-" + Math.floor(new Date().getDay() * Math.random()*10),
      name: "Tom",
      address: "No. 189, Grove St, "
    },
    {
      date: params.page + "-" + Math.floor(new Date().getDay() * Math.random()*10),
      name: "Tom",
      address: "No. 189, Grove St, "
    },
    {
      date: params.page + "-" + Math.floor(new Date().getDay() * Math.random()*10),
      name: "Tom",
      address: "No. 189, Grove St, "
    },
    {
      date: params.page + "-" + Math.floor(new Date().getDay() * Math.random()*10),
      name: "Tom",
      address: "No. 189, Grove St, "
    },
    {
      date: params.page + "-" + Math.floor(new Date().getDay() * Math.random()*10),
      name: "Tom",
      address: "No. 189, Grove St, "
    },
    {
      date: params.page + "-" + Math.floor(new Date().getDay() * Math.random()*10),
      name: "Tom",
      address: "No. 189, Grove St, "
    },
    {
      date: params.page + "-" + Math.floor(new Date().getDay() * Math.random()*10),
      name: "Tom",
      address: "No. 189, Grove St, "
    },
    {
      date: params.page + "-" + Math.floor(new Date().getDay() * Math.random()*10),
      name: "Tom",
      address: "No. 189, Grove St, "
    },
    {
      date: params.page + "-" + Math.floor(new Date().getDay() * Math.random()*10),
      name: "Tom",
      address: "No. 189, Grove St, "
    },
    {
      date: params.page + "-" + Math.floor(new Date().getDay() * Math.random()*10),
      name: "Tom",
      address: "No. 189, Grove St, "
    }
  ];
  return new Promise(resolve => {
    const { page, limit } = params;
    console.log(page, limit);
    setTimeout(() => {
      resolve({
        total: data.length,
        data: data.slice((page - 1) * limit, (page - 1) * limit + limit)
      });
    }, 100);
  });
};
