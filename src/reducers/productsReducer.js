import { SHOW_ALL_PRODUCTS, SHOW_PRODUCT, ADD_NEW, EDIT_PRODUCT, DELETE_PRODUCT } from '../actions/types'

//every reducer has its own state!:

const initialState = {
    products: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SHOW_ALL_PRODUCTS:
            return {
                //take the state and change its property 'products' value:
                ...state,
                products: action.payload //all products, we got with axios.get method in 'actions'
            }

        case SHOW_PRODUCT:
            return {
                ...state,
                product: action.payload
            }

        case ADD_NEW:
            return {
                ...state,
                products: [...state.products, action.payload]
                //with [...a, b] we create an [] (as state.products was), CONCATENING a COPY of the CURRENT products AND the NEW product!
            }

        case EDIT_PRODUCT:
                return {
                ...state,
                //first we take the product from the global state with the same id; then, we change its content for the payload of the dispatched action:
                products: state.products.map( product => product.id === action.payload.id ? (product = action.payload) : product )
            }

        case DELETE_PRODUCT:
            return {
                //changing property of state (products: now is filtered products)
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            }

        default:
            return state
    }
}