
import axiosClient from './axiosClient';

const getLatesProducts = () => axiosClient.get('/products?populate=*');
const getProductById = (id) => axiosClient.get(`/products/${id}?populate=*`)
const getProductByGategory = (category) => axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`)

export default {
    getLatesProducts,
    getProductById,
    getProductByGategory
};
