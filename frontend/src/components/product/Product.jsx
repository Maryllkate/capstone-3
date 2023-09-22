import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product }) => { 
  return (
      <div key={product.id} className="col-sm-12 col-md-6 col-lg-3 my-3">
        <div className="card p-3 rounded">
            <img
            className="card-img-top mx-auto"
            src="../images/astro.png"
            />

            <div className="card-body d-flex flex-column">
                <h5 className="card-title">
                    <Link to={`/product/${product._id}`}>{product.productName}</Link>
                </h5>
            <div className="ratings mt-auto">
                <div className="rating-outer">
                    <div className="rating-inner"></div>
                </div>
                <span id="no_of_reviews">(5 Reviews)</span>
            </div>
                <p className="card-text">PHP {product.price}</p>
                <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block">View Details</Link>
            </div>
        </div>
    </div>

    // <div className="col-sm-12 col-md-6 col-lg-3 my-3">
    //     <div className="card p-3 rounded">
    //         <img
    //         className="card-img-top mx-auto"
    //         src="../images/astro.png"
    //         />

    //         <div className="card-body d-flex flex-column">
    //             <h5 className="card-title">
    //                 <a href="../images/astro.png">Fujifilm Instax Mini Instant Film Twin Pack (White)</a>
    //             </h5>
    //         <div className="ratings mt-auto">
    //             <div className="rating-outer">
    //                 <div className="rating-inner"></div>
    //             </div>
    //             <span id="no_of_reviews">(5 Reviews)</span>
    //         </div>
    //             <p className="card-text">PHP 45.67</p>
    //             <a href="#" id="view_btn" className="btn btn-block">View Details</a>
    //         </div>
    //     </div>
    // </div>

    // <div className="col-sm-12 col-md-6 col-lg-3 my-3">
    //     <div className="card p-3 rounded">
    //         <img
    //         className="card-img-top mx-auto"
    //         src="../images/astro.png"
    //         />

    //         <div className="card-body d-flex flex-column">
    //             <h5 className="card-title">
    //                 <a href="../images/astro.png">AmazonBasics High-Speed HDMI Cable</a>
    //             </h5>
    //         <div className="ratings mt-auto">
    //             <div className="rating-outer">
    //                 <div className="rating-inner"></div>
    //             </div>
    //             <span id="no_of_reviews">(5 Reviews)</span>
    //         </div>
    //             <p className="card-text">PHP 45.67</p>
    //             <a href="#" id="view_btn" className="btn btn-block">View Details</a>
    //         </div>
    //     </div>
    // </div>

    // <div className="col-sm-12 col-md-6 col-lg-3 my-3">
    //     <div className="card p-3 rounded">
    //         <img
    //         className="card-img-top mx-auto"
    //         src="../images/astro.png"
    //         />

    //         <div className="card-body d-flex flex-column">
    //             <h5 className="card-title">
    //                 <a href="../images/astro.png">128GB Solid Storage Memory card - SanDisk Ultra</a>
    //             </h5>
    //         <div className="ratings mt-auto">
    //             <div className="rating-outer">
    //                 <div className="rating-inner"></div>
    //             </div>
    //             <span id="no_of_reviews">(5 Reviews)</span>
    //         </div>
    //             <p className="card-text">PHP 45.67</p>
    //             <a href="#" id="view_btn" className="btn btn-block">View Details</a>
    //         </div>
    //     </div>
    // </div>

    // <div className="col-sm-12 col-md-6 col-lg-3 my-3">
    //     <div className="card p-3 rounded">
    //         <img
    //         className="card-img-top mx-auto"
    //         src="../images/astro.png"
    //         />

    //         <div className="card-body d-flex flex-column">
    //             <h5 className="card-title">
    //                 <a href="../images/astro.png">AmazonBasics High-Speed HDMI Cable, 6 Feet</a>
    //             </h5>
    //         <div className="ratings mt-auto">
    //             <div className="rating-outer">
    //                 <div className="rating-inner"></div>
    //             </div>
    //             <span id="no_of_reviews">(5 Reviews)</span>
    //         </div>
    //             <p className="card-text">PHP 45.67</p>
    //             <a href="#" id="view_btn" className="btn btn-block">View Details</a>
    //         </div>
    //     </div>
    // </div>
  )
}

export default Product
