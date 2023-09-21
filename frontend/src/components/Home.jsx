import React, { Fragment } from 'react'
import MetaData  from './layout/MetaData'

const Home = () => {
  return (
    <Fragment>
        <MetaData title={'Buy Best Products Online'}/>
        <h1 id="products_heading">Latest Products</h1>

        <section id="products" className="container mt-5">
        <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                <div className="card p-3 rounded">
                    <img
                    className="card-img-top mx-auto"
                    src="../images/astro.png"
                    />

                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">
                            <a href="../images/astro.png">128GB Solid Storage Memory card - SanDisk Ultra</a>
                        </h5>
                    <div className="ratings mt-auto">
                        <div className="rating-outer">
                            <div className="rating-inner"></div>
                        </div>
                        <span id="no_of_reviews">(5 Reviews)</span>
                    </div>
                        <p className="card-text">PHP 45.67</p>
                        <a href="#" id="view_btn" className="btn btn-block">View Details</a>
                    </div>
                </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                <div className="card p-3 rounded">
                    <img
                    className="card-img-top mx-auto"
                    src="../images/astro.png"
                    />

                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">
                            <a href="../images/astro.png">Wyze Cam 1080p HD Indoor Wireless Smart Home Camera Wyze Cam 1080p HD Indoor Wireless Smart Home Camera</a>
                        </h5>
                    <div className="ratings mt-auto">
                        <div className="rating-outer">
                            <div className="rating-inner"></div>
                        </div>
                        <span id="no_of_reviews">(5 Reviews)</span>
                    </div>
                        <p className="card-text">PHP 45.67</p>
                        <a href="#" id="view_btn" className="btn btn-block">View Details</a>
                    </div>
                </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                <div className="card p-3 rounded">
                    <img
                    className="card-img-top mx-auto"
                    src="../images/astro.png"
                    />

                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">
                            <a href="../images/astro.png">Fujifilm Instax Mini Instant Film Twin Pack (White)</a>
                        </h5>
                    <div className="ratings mt-auto">
                        <div className="rating-outer">
                            <div className="rating-inner"></div>
                        </div>
                        <span id="no_of_reviews">(5 Reviews)</span>
                    </div>
                        <p className="card-text">PHP 45.67</p>
                        <a href="#" id="view_btn" className="btn btn-block">View Details</a>
                    </div>
                </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                <div className="card p-3 rounded">
                    <img
                    className="card-img-top mx-auto"
                    src="../images/astro.png"
                    />

                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">
                            <a href="../images/astro.png">AmazonBasics High-Speed HDMI Cable</a>
                        </h5>
                    <div className="ratings mt-auto">
                        <div className="rating-outer">
                            <div className="rating-inner"></div>
                        </div>
                        <span id="no_of_reviews">(5 Reviews)</span>
                    </div>
                        <p className="card-text">PHP 45.67</p>
                        <a href="#" id="view_btn" className="btn btn-block">View Details</a>
                    </div>
                </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                <div className="card p-3 rounded">
                    <img
                    className="card-img-top mx-auto"
                    src="../images/astro.png"
                    />

                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">
                            <a href="../images/astro.png">128GB Solid Storage Memory card - SanDisk Ultra</a>
                        </h5>
                    <div className="ratings mt-auto">
                        <div className="rating-outer">
                            <div className="rating-inner"></div>
                        </div>
                        <span id="no_of_reviews">(5 Reviews)</span>
                    </div>
                        <p className="card-text">PHP 45.67</p>
                        <a href="#" id="view_btn" className="btn btn-block">View Details</a>
                    </div>
                </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                <div className="card p-3 rounded">
                    <img
                    className="card-img-top mx-auto"
                    src="../images/astro.png"
                    />

                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">
                            <a href="../images/astro.png">AmazonBasics High-Speed HDMI Cable, 6 Feet</a>
                        </h5>
                    <div className="ratings mt-auto">
                        <div className="rating-outer">
                            <div className="rating-inner"></div>
                        </div>
                        <span id="no_of_reviews">(5 Reviews)</span>
                    </div>
                        <p className="card-text">PHP 45.67</p>
                        <a href="#" id="view_btn" className="btn btn-block">View Details</a>
                    </div>
                </div>
            </div>

        
        </div>
      
      
        </section>
    </Fragment>

    )
}

export default Home
