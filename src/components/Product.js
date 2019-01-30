import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//Redux:
import { connect } from 'react-redux'
import { deleteAProduct } from '../actions/actionsCreator' //the fn we created in actions

class Product extends Component {
    
    delete = () => {
        const { id } = this.props.info

        this.props.deleteAProduct(id)
    }

    render() {
        const { id, name, price } = this.props.info

        return (
            <li className="list-group-item">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-8 d-flex justify-content-between align-items-center">
                            <p className="text-dark m-0">{name}</p>
                            <p className="badge badge-pill badge-primary m-0">$ {price}</p>
                    </div>
                    <div className="col-md-4 d-flex justify-content-end">
                        <Link to={`products/edit/${id}`} className="btn btn-warning mr-1" type="button">Edit</Link>
                        <button onClick={this.delete} type="button" className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </li>
        )
    }
}

export default connect(null, { deleteAProduct })(Product)
//we don't need mapStateToProps bc deleteAProduct action doesn't need to add anything to the state