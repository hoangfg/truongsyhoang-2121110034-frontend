

import React from 'react'
import PictureBox from './PictureBox'
import RelatedProduct from '../../components/RelatedProduct'


export default function ProductDetail() {
  return (
 <div className="well well-small">
  <div className="row-fluid">
    <div className="span5" >
      <PictureBox />
    </div>
    <div className="span7">
      <h3>Name of the Item [$140.00]</h3>
      <hr className="soft" />
      <form className="form-horizontal qtyFrm">
        <div className="control-group">
          <label className="control-label"><span>$140.00</span></label>
          <div className="controls">
            <input type="number" className="span6" placeholder="Qty." />
          </div>
        </div>
        <p>
          Nowadays the lingerie industry is one of the most successful
          business spheres. Nowadays the lingerie industry is one of ...
        </p>
        <p>
          <button type="submit" className="shopBtn">
            <span className="icon-shopping-cart" /> Add to cart
          </button>
        </p>
      </form>
    </div>
  </div>
  <hr className="softn clr" />
  <ul id="productDetail" className="nav nav-tabs">
    <li className="active">
      <a href="#home" data-toggle="tab">Product Details</a>
    </li>
    <li className>
      <a href="#profile" data-toggle="tab">Related Products </a>
    </li>
  </ul>
  <div id="myTabContent" className="tab-content tabWrapper">
    <div className="tab-pane fade active in" id="home">
      <h4>Product Information</h4>
      <p>
        Raw denim you probably haven't heard of them jean shorts Austin.
        Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
        cliche tempor, williamsburg carles vegan helvetica. Reprehenderit
        butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi,
        qui irure terry richardson ex squid. Aliquip placeat salvia cillum
        iphone. Seitan aliquip quis cardigan american apparel, butcher
        voluptate nisi qui.
      </p>
    </div>
    <div className="tab-pane fade" id="profile">
      <RelatedProduct />
    </div>
  </div>
</div>

  )
}
