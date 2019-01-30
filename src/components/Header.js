import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex">
                <h1>
                    <Link to={'/'} className="text-light">CRUD REACT-REDUX, REST API and AXIOS</Link>
                </h1>

                <Link to={'/products/new'} className="btn btn-success">Add +</Link>
            </nav>
        )
    }
}

export default Header