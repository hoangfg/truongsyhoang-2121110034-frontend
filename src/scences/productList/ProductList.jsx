import React, { useState } from "react";
import ProductBox from "../../components/ProductBox";
import CategoryMenu from "./CategoryMenu";
import Loading from "../../components/Loading";
import { categoryApi } from "./../../Api/categoryApi";
import { productApi } from "./../../Api/productApi";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Paginate from "../../components/Paginate";
import Filter from "./Filter";

export default function ProductList() {
  var [categories, setCategories] = useState({});
  var [products, setProducts] = useState({});
  var [loading, setLoading] = useState(true);
  var [totalPage, setTotalPage] = useState(1);
  var [filterKey, setFilterKey] = useState("");
  var [maxPrice, setMaxPrice] = useState(null);
  var [category, setCategory] = useState(null);
  const handleFilterByName = (e) => {
    setFilterKey(e.target.value);
  };
  const handleFilterMaxPrice = (e) => {
    setMaxPrice(e.target.value);
  };
  const handleFilterByCategory = (e) => {
    if (e.target.innerText === "All Categories") {
      setCategory(null);
    } else {
      setCategory(e.target.innerText);
    }
  };

  var myView1 =
    loading === true ? (
      <Loading />
    ) : (
      <CategoryMenu
        categories={categories}
        handleFilterByCategory={handleFilterByCategory}
      />
    );
  var myView2 =
    loading === true ? <Loading /> : <ProductBox products={products} />;
  var { pageNum } = useParams();
  var params = {
    populate: "*",
    // "pagination[pageSize]": 12,
    // "pagination[page]": pageNum ? pageNum : 1,
    // "filters[productName][$contains]": filterKey ? filterKey : null,
    // "filters[price][$lt]": maxPrice ? maxPrice : null,
    // "filters[price][$rt]": minPrice ? minPrice : 0,
    pagination: {
      pageSize: 12,
      page: pageNum ? pageNum : 1,
    },
    sort: {
      id: "desc",
    },

    filters: {
      productName: {
        $contains: filterKey ? filterKey : null,
      },
      price: {
        $lt: maxPrice ? maxPrice : null,
      },
      category: {
        categoryName: {
          $eq: category ? category : null,
        },
      },
    },
  };
  //  console.log(params);
  useEffect(() => {
    const fetchData = async () => {
      var response1 = await categoryApi.getAll();
      var response2 = await productApi.getAll(params);

      // console.log("r1: ", response1)
      console.log("r2: ", response2);
      setCategories(response1.data.data);
      setProducts(response2.data.data);
      // console.log("r4444: ", products)
      setTotalPage(response2.data.meta.pagination.pageCount);
      setLoading(false);
    };
    fetchData();
  }, [pageNum, filterKey, maxPrice, category]);

  return (
    <div className="row">
      <div id="sidebar" className="span2">
        {myView1}
      </div>
      <div className="span10">
        <Filter
          handleFilterMaxPrice={handleFilterMaxPrice}
          handleFilterByName={handleFilterByName}
        />
        {myView2}
      </div>
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
