import API from "../api/axios";

// Get All Products
export const getProducts = async () => {
    const response = await API.get("/products");
    return response.data;
};

// Get Single Product
export const getProduct = async (id) => {
    const response = await API.get(`/products/${id}`);
    return response.data;
};