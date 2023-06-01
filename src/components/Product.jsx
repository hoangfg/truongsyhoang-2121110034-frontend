
import React from 'react'
import AppUrl from '../Api/AppUrl'

export default function Product(props) {
  // console.log(props)
  var product = props.product

  return (
<div className="thumbnail" style={{ height: '340px'}}>
  <a href="product_details.html" className="overlay">Pr</a>
  {/* <a className="zoomTool" href="product_details.html" title="add to cart" style={{display: 'none'}}><span className="icon-search" /> QUICK VIEW</a> */}
  <a href="product_details.html"><img src={AppUrl.ImageURL+product.attributes.image.data[0].attributes.url} alt="img" /></a>
  <div className="caption cntr">
    <p>{product.attributes.productName}</p>
    <p><strong>{product.attributes.price}</strong></p>
    <h4><a className="shopBtn" href="#st" title="add to cart"> Add to cart </a></h4>
    <div className="actionList">
      <a className="pull-left" href="#st">Add to Wish List </a> 
      <a className="pull-left" href="#st"> Add to Compare </a>
    </div> 
    <br className="clr" />
  </div>
</div>

  )
}
