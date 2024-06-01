const { default: axiosClient } = require("./axiosClient");


const Addtocart = (data)=> axiosClient.post('/carts',data);

const getUserCartItems = email=>axiosClient.get(`/carts?populate[products][populate]=image&filters[email][$eq]=${email}`);

const deleteCartItem = (id)=> axiosClient.delete(`/carts/${id}`);



export default {
    Addtocart,
    getUserCartItems,
    deleteCartItem
};