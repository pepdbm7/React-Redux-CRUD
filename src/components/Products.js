import React, { Component } from 'react'
import Product from '../components/Product'



//Redux:
import { connect } from 'react-redux'
import { showAllProducts} from '../actions/actionsCreator'


class Products extends Component {

    componentDidMount() {
        //we call funcs we defined as 'Actions':
        this.props.showAllProducts()
    }

    render() {
        //we take products from state (that we get as props via 'MapStateToProps'):
        const { products } = this.props

        return (
            <React.Fragment>
                <h2 className="text-center my-5">Products List</h2>
                
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <ul>
                            {products.map((product) => (
                                <Product key={product.id} info={product} />
                            ))}
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

//State (which is a copy of the DB, not the DB itself!):
const mapStateToProps = state => ({
    products: state.products.products

})

export default connect(mapStateToProps, { showAllProducts })(Products)