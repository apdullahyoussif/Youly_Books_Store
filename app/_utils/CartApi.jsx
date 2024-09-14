

import axiosClient from './axiosClient'

const addToCart = (payload)=>axiosClient.post('/carts',payload)
const getUserCartItems = (email)=>axiosClient.get(`/carts?populate[products][populate]=image&fliters[email][$eq]=${email}`)
const deleteItemFromCart = (id)=>axiosClient.delete(`/carts/${id}`)


export default {
    addToCart,
    getUserCartItems,
    deleteItemFromCart
}