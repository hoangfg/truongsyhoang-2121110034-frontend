import React from 'react'

export default function RelatedProduct() {
  return (
<div className="row-fluid">
  <div className="span2">
    <img src="/app/assets/img/d.jpg" alt='12'/>
    </div>
    <div className="span6">
      <h5>Product Name</h5>
      <p>Nowadays the lingerie industry is one of the most successful business spheres. We always stay in touch with the latest fashion tendencies - that is why our goods are so popular..</p>
      </div>
      <div className="span4 alignR">
        <form className="form-horizontal qtyFrm">
          <h3>$140.00</h3><label className="checkbox">
            <input type="checkbox" /> Adds product to compair </label
            ><br />
            <div className="btn-group"><a href="product_details.html" className="defaultBtn">
              <span className="icon-shopping-cart" /> Add to cart</a>
              <a href="product_details.html" className="shopBtn">VIEW</a>
              </div>
              </form>
              </div>
              </div>
  )
}
