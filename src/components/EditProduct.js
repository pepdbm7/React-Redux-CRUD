import React, { Component } from 'react'

//Redux:
import { connect } from 'react-redux'
import { showProduct, editProduct } from '../actions/actionsCreator'


class EditProduct extends Component {
    state = { error: null, name: '', price: '' }

    componentDidMount() {
        //take ID (from global state, where we'd put product's data with reducer):
        const { id } = this.props.match.params


        this.props.showProduct(id)
    }

    componentWillReceiveProps(nextProps, nextState) { 
        //now that component is mounted and got answer of API call of actionCreator showProduct() we called, we can put the data to the state, to make it accessible for the render(), and set them as inputs' defaultvalue:

        const { name, price } = nextProps.product

        this.setState({ name, price })
    }
    
    handleChange = e => {
        const { name, value } = e.target

        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()

        const { name, price } = this.state

        //show error if fields missing:
        if(!name || !price) {
            this.setState({ error: !null})

            setTimeout(() => this.setState({ error: null }), 1500)
            return
        }

        //take ID from global state:
        const { id } = this.props.match.params

        //create object:
        const ProductData = {
            id,
            name,
            price
        }


        //call actionCreator that updates product's new data into DB:
        this.props.editProduct(ProductData)

        //go back homepage:
        this.props.history.push('/')

    }
    
    render() {
        const { error, name, price } = this.state
        return (
           
                <div className="card border-info m-5 p-3">

                    <h1 className="card-title text-center text-primary">Edit Product</h1>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Product name</label>
                                <input defaultValue={name} onChange={this.handleChange} type="text" name="name" className="form-control" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input defaultValue={price} onChange={this.handleChange} type="number" name="price" className="form-control" placeholder="Price" />
                            </div>
                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-5">Save</button>
                        </form>
                        {error ? <div className="text-center font-weight-bold text-danger mt-2">All fields required</div> : ''}
                    </div>
                </div>
           
        )
    }
}

//state:
const mapStateToProps = state => ({
    product: state.products.product
})

export default connect(mapStateToProps, {showProduct, editProduct})(EditProduct)