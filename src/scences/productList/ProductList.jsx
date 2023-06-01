import React, { useState } from "react";
import ProductBox from "../../components/ProductBox";
import CategoryMenu from "./CategoryMenu";
import Loading from "../../components/Loading";
import { categoryApi } from "./../../Api/categoryApi";
import { productApi } from "./../../Api/productApi";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Paginate from "../../components/Paginate";

export default function ProductList() {
  var [categories, setCategories] = useState({});
  var [products, setProducts] = useState({});
  var [loading, setLoading] = useState(true);
  var [totalPage, setTotalPage] = useState(1);
  var myView1 =
    loading === true ? <Loading /> : <CategoryMenu categories={categories} />;
  var myView2 =
    loading === true ? <Loading /> : <ProductBox products={products} />;
  var { pageNum } = useParams();
  var params = {
    populate: "*",
    "pagination[pageSize]": 12,
    "pagination[page]": pageNum ? pageNum : 1,
  };
  useEffect(() => {
    const fetchData = async () => {
      var response1 = await categoryApi.getAll();
      var response2 = await productApi.getAll(params);

      // console.log("r1: ", response1)
      // console.log("r2: ", response2)
      setCategories(response1.data.data);
      setProducts(response2.data.data);
      // console.log("r4444: ", products)
      setTotalPage(response2.data.meta.pagination.pageCount);
      setLoading(false);
    };
    fetchData();
  }, [pageNum]);

  return (
    <div className="row">
      <div id="sidebar" className="span3">
        {myView1}
      </div>
      <div className="span9">{myView2}</div>
      {totalPage > 1 && (
        <Paginate
          totalPage={totalPage}
          currentPage={pageNum ? pageNum : 1}
          basePath="http://localhost:3000/product/page/"
        />
      )}
    </div>
  );
}
