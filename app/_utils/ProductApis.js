const { default: axiosClient } = require("./axiosClient");


const getLatestProduct = ()=> axiosClient.get("/courses?populate=*");
const getproduct = (id)=>axiosClient.get(`/courses/${id}?populate=*`);
const getproductlistbyCategory = (category)=>axiosClient.get(`/courses?filters[category][$eq]=${category}&populate=*`);


export default {
getLatestProduct,
getproduct,
getproductlistbyCategory
};

