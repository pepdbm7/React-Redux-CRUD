import React, { Component } from 'react'

//Redux:
import { connect } from 'react-redux'
import { addNew } from '../actions/actionsCreator'

class NewProduct extends Component {
    state = { error: null, name: '', price: '' }
    
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

        //create object:
        const ProductData = {
            name,
            price
        }


        //call fn of actions that send product data to DB (post method):
        this.props.addNew(ProductData)

        //go back homepage:
        this.props.history.push('/')
    }
    
    render() {
        const { error } = this.state
        return (
           
                <div className="card border-info m-5 p-3">

                    <h1 className="card-title text-center text-primary">Add New Product</h1>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Product name</label>
                                <input onChange={this.handleChange} type="text" name="name" className="form-control" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input onChange={this.handleChange} type="number" name="price" className="form-control" placeholder="Price" />
                            </div>
                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-5">Accept</button>
                        </form>
                        {error ? <div className="text-center font-weight-bold text-danger mt-2">All fields required</div> : ''}
                    </div>
                </div>
           
        )
    }
}

export default connect(null, {addNew})(NewProduct)