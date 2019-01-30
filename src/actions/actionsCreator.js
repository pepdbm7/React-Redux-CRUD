import { SHOW_ALL_PRODUCTS, ADD_NEW, EDIT_PRODUCT, SHOW_PRODUCT, DELETE_PRODUCT } from './types'

import axios from 'axios'


export const showAllProducts = () => async dispatch => {  //RETRIEVE
    
    const result = await axios.get('http://localhost:5000/products')

    //the reducer will modify the global state with this fetched data we're providing/dispatching as part of the action object:
    dispatch({
        type: SHOW_ALL_PRODUCTS,
        payload: result.data
    })
}

export const showProduct = id => async dispatch => {  //RETRIEVE ONE
    if(typeof(id) !== 'string') throw TypeError('id is not an number')
    
    const result = await axios.get(`http://localhost:5000/products/${id}`)

    dispatch({
        type: SHOW_PRODUCT,
        payload: result.data
    })
}


export const deleteAProduct = id => async dispatch => {  //DELETE
    if(typeof(id) !== 'number') throw TypeError('id is not an number')

    //delete the url of this product so it's not accessible throught it anymore:
    await axios.delete(`http://localhost:5000/products/${id}`)


    //we dispatch only the product.id in the action object's payload, so we'll use it in the reducer to filter the products with different id:
    dispatch({
        type: DELETE_PRODUCT,
        payload: id
    })
}

export const editProduct = product => async dispatch => {    //UPDATE
    if(typeof(product) !== 'object') throw TypeError('new product is not an object')


    const result = await axios.put(`http://localhost:5000/products/${product.id}`, product)


    dispatch({
        type: EDIT_PRODUCT,
        payload: result.data
    })
}

export const addNew = product => async dispatch => {  //CREATE MORE
    if(typeof(product) !== 'object') throw TypeError('new product is not an object')

    //post method: url and the product's data we want to add to DB:
    const result = await axios.post('http://localhost:5000/products', product)

    dispatch({
        type: ADD_NEW,
        payload: result.data
    })
}