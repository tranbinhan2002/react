import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";
export default class componentName extends Component {
    render() {
        return (
            <div>
                <div>
  <section className="jumbotron text-center">
    <div className="container">
      <h1 className="jumbotron-heading">CART</h1>
    </div>
  </section>
  <div className="container mb-4">
    <div className="row">
      <div className="col-12">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col"> </th>
                <th scope="col">Product</th>
                <th scope="col">Available</th>
                <th scope="col" className="text-center">Quantity</th>
                <th scope="col" className="text-right">Price</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img className="img-cart" src="https://i.pinimg.com/236x/0e/4d/83/0e4d83144d343e5d66f7663f7f02041b.jpg" alt="hinh" /> </td>
                <td>Lamborghini Diablo</td>
                <td>In stock</td>
                <td><input className="form-control" type="text" defaultValue={1} /></td>
                <td className="text-right">124,90$ </td>
                <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash" /> </button> </td>
              </tr>
              <tr>
                <td><img className="img-cart" src="https://i.pinimg.com/236x/7a/05/f0/7a05f09230911829f6dff02d561c6251.jpg" alt="hinh"/> </td>
                <td>Ford Mustang</td>
                <td>In stock</td>
                <td><input className="form-control" type="text" defaultValue={1} /></td>
                <td className="text-right">33,90$</td>
                <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash" /> </button> </td>
              </tr>
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td>Sub</td>
                <td className="text">255,90$</td>
              </tr>
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td>Shipping</td>
                <td className="text">6,90$</td>
              </tr>
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td><strong>Total</strong></td>
                <td className="text"><strong>346,90$</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="col mb-2">
        <div className="row">
          <div className="col-sm-12  col-md-6">
            <Link to="/home" className="btn btn-block btn-light">Continue Shopping</Link>
          </div>
          <div className="col-sm-12 col-md-6 text-right">
            <button className="btn btn-lg btn-block btn-success text-uppercase">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

            </div>
        )
    }
}
