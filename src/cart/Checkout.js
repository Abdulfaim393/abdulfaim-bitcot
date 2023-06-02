import React from 'react'

const Checkout = ({ id, description, title, img, price, quantity }) => {
    return (
        <>
            <div className="py-1 bg-secondary text-light">
                <div className="container">
                    <h5>Cart/Checkout</h5>
                </div>
            </div>
            <div className="py-4">
                <div className="container">
                    <div className="row">

                        <div className="col-md-7">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Basic Information</h4>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label>First Name</label>
                                                <input type="text" name="firstname" className='form-control' />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label>Last Name</label>
                                                <input type="text" name="lasttname" className='form-control' />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label>Phone Number</label>
                                                <input type="text" name="phone" className='form-control' />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label>Email Address</label>
                                                <input type="text" name="email" className='form-control' />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <label>Full Address</label>
                                                <textarea rows="3" className='form-control'></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group mb-3">
                                                <label>City</label>
                                                <input type="text" name="city" className='form-control' />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group mb-3">
                                                <label>State</label>
                                                <input type="text" name="state" className='form-control' />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group mb-3">
                                                <label>Zip Code</label>
                                                <input type="text" name="zipcode" className='form-control' />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group text-end">
                                                <button type='button' className='btn btn-primary'>Place Order</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th width="50%">Products</th>
                                        <th>Brand</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{description} 10</td>
                                        <td>{title}</td>
                                        <td>{quantity}</td>
                                        <td>{price}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2" className='text-end' >Grand Total</td>
                                        <td colSpan="2" className='text-end px-3'>54999</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout