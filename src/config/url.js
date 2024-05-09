const URL = {
  getAllProducts: `/product`,
  getSingleProduct: (id) => `/product/${id}`,
  getSearchProduct: (search) => `/product/search?search=${search}`,
  Login: "auth/login",
  Register: "auth/register",
  createOrder: "/order",
  getAllCategories: "/category",
};

export default URL;
