import React, { Fragment } from 'react'
import { BsFillCartPlusFill, BsPersonCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import '../../App.css'

const Header = () => {
  return (
    <Fragment>
        <nav className="navbar row">
            <div className="col-12 col-md-3">
                <div className="navbar-brand">
                    <img src="/images/logo.jpg" />
                </div>
            </div>

            <div className="col-12 col-md-6 mt-2 mt-md-0">
                <div className="input-group">
                <input
                    type="text"
                    id="search_field"
                    className="form-control"
                    placeholder="Enter Product Name ..."
                />
            <div className="input-group-append">
                    <button id="search_btn" className="btn">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <Link to="/login" className="btn" id="login_btn"><BsPersonCircle /></Link>

        <span id="cart" className="ml-3"><BsFillCartPlusFill /></span>
        <span className="ml-1" id="cart_count">0</span>
      </div>
    </nav>
    </Fragment>
  )
}

export default Header
