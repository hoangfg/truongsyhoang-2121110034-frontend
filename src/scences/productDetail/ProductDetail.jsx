import React, { useEffect, useState } from "react";
import PictureBox from "./PictureBox";
import RelatedProduct from "../../components/RelatedProduct";
import { Link, useParams } from "react-router-dom";
import Loading from "./../../components/Loading";
import { productApi } from "../../Api/productApi";
import currency from "currency.js";
import { addToCart } from "../../state/cartSlice";
import { useDispatch } from "react-redux";

export default function ProductDetail() {
  var { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  var myView1 =
    loading === true ? (
      <Loading />
    ) : (
      <PictureBox images={product.attributes.image.data} />
    );
  const dispatch = useDispatch();
  var myView2 =
    loading === true ? (
      <Loading />
    ) : (
      <div>
        <h3>
          {product.attributes.productName} [
          {currency(product.attributes.price, {
            symbol: "",
            separator: ".",
            decimal: ",",
          })
            .format()
            .replace(/(\.00$|,00$)/g, "")}
          đ]
        </h3>

        <hr className="soft" />
        <form className="form-horizontal qtyFrm">
          <div className="control-group">
            <label className="control-label">
              <span>
                {currency(product.attributes.price, {
                  symbol: "",
                  separator: ".",
                  decimal: ",",
                })
                  .format()
                  .replace(/(\.00$|,00$)/g, "")}
                đ
              </span>
            </label>
            <div className="controls">
              <input
                type="number"
                className="span6"
                placeholder="Qty."
                value={quantity} // Giá trị của trường input
                onChange={(e) => setQuantity(e.target.value)} // Xử lý sự kiện thay đổi giá trị
              />
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: product.attributes.description }}
          ></div>
          <p>
            <Link
              to="#st"
              type="submit"
              className="shopBtn"
              onClick={() =>
                dispatch(
                  addToCart({ item: { ...product, count: Number(quantity) } })
                )
              }
            >
              <span className="icon-shopping-cart" /> Add to cart
            </Link>
          </p>
        </form>
      </div>
    );
  var myView3 =
    loading === true ? (
      <Loading />
    ) : (
      <div
        dangerouslySetInnerHTML={{ __html: product.attributes.detail }}
      ></div>
    );
  var params = {
    populate: "*",
  };
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await productApi.get(id, params);
      // console.log(response.data.data);

      setProduct(response.data.data);
      setLoading(false);
    };
    fetchProduct();
  }, []);

  return (
    <div className="well well-small">
      <div className="row-fluid">
        <div className="span5">{myView1}</div>
        <div className="span7">{myView2}</div>
      </div>
      <hr className="softn clr" />
      <ul id="productDetail" className="nav nav-tabs">
        <li className="active">
          <a href="#home" data-toggle="tab">
            Product Details
          </a>
        </li>
        <li className>
          <a href="#profile" data-toggle="tab">
            Related Products{" "}
          </a>
        </li>
      </ul>
      <div id="myTabContent" className="tab-content tabWrapper">
        <div className="tab-pane fade active in" id="home">
          <h4>Product Information</h4>
          {myView3}
        </div>
        <div className="tab-pane fade" id="profile">
          <RelatedProduct />
        </div>
      </div>
    </div>
  );
}
