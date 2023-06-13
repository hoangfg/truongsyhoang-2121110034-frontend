import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AdminProductItem from "./AdminProductItem";
import Loading from "../../../components/Loading";
import { productApi } from "../../../Api/productApi";
import Paginate from "../../../components/Paginate";
import AdminCategoryDetail from "../category/AdminCategoryDetail";

export default function AdminProductBox() {
  var [products, setProducts] = useState({});
  var [loading, setLoading] = useState(true);
  var [totalPage, setTotalPage] = useState(1);
  const [msgSuccess, setMsgSuccess] = useState("");
  const [msgWarning, setMsgwarning] = useState("");
  const [loadData, setLoadData] = useState(1);
  const [viewOption, setViewOption] = useState("preview");
  var { pageNum } = useParams();

  const handleDelete = (e) => {
    const deleteProduct = async (id) => {
      var c = window.confirm("Remove Product");
      if (c === true) {
        try {
          e.target.classList.remove("icon-remove");
          e.target.classList.add("icon-spinner");
          await productApi.delete(id);
          setMsgSuccess("Delete success " + id);
        } catch (error) {
          setMsgwarning("Delete error " + id + error);
        } finally {
          setLoadData(loadData + 1);
          window.scroll(0, 0);
          e.target.classList.remove("icon-spinner");
          e.target.classList.add("icon-remove");
        }
      }
    };
    deleteProduct(e.target.getAttribute("name"));
  };
  const handleShow = (e) => {
     <AdminCategoryDetail handleShow = {handleShow}/>
  }
  const handleSelect = (e) => {
    setViewOption(e.target.value);
  };
  const handlePublish = (e) => {
    var data = {
      data: {
        publishedAt: e.target.value == 0 ? Date.now() : null,
      },
    };
    const togglePublish = async (e) => {
      await productApi.update(e.target.getAttribute("name"), data);
      setLoadData(loadData + 1);
    };
    togglePublish(e);
  };
  var params = {
    populate: "*",
    sort: {
      id: "desc",
    },
    pagination: {
      pageSize: 12,
      page: pageNum ? pageNum : 1,
    },
    publicationState: viewOption,
  };
  var myView = (
    <tbody>
      {/* {
      loading === true ? (
      <Loading />) : (
      {products.map((product, i) => (
        <AdminProductItem
          key={product.id}
          stt={(pageNum - 1) * 12 + i + 1}
          product={product}
        />
      ))
      )} */}
      {loading === true ? (
        <tr>
          <td colSpan="12">
            <div className="text-center">
              <Loading />
            </div>
          </td>
        </tr>
      ) : (
        products.map((product, i) => (
          <AdminProductItem
            handleDelete={handleDelete}
            handlePublish={handlePublish}
            key={product.id}
            stt={
              (params.pagination.page - 1) * params.pagination.pageSize + i + 1
            }
            product={product}
          />
        ))
      )}
    </tbody>
  );

  useEffect(() => {
    const fetchData = async () => {
      var response = await productApi.getAll(params);
      // console.log(response);
      setProducts(response.data.data);
      setTotalPage(response.data.meta.pagination.pageCount);

      setLoading(false);
    };
    fetchData();
  }, [pageNum, loadData, viewOption]);
  return (
    <div className="card-body">
      <div className="col-12">
        {msgWarning !== "" && (
          <div className="alert alert-danger alert-dismissible">
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-hidden="true"
            >
              ×
            </button>
            <h5>
              <i className="icon fas fa-ban" /> {msgWarning}
            </h5>
          </div>
        )}
        {msgSuccess !== "" && (
          <div className="alert alert-success alert-dismissible">
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-hidden="true"
            >
              ×
            </button>
            <h5>
              <i className="icon fas fa-check" />
              {msgSuccess}
            </h5>
          </div>
        )}
      </div>
      <div id="example1_wrapper" className="dataTables_wrapper dt-bootstrap4">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="dt-buttons btn-group flex-wrap">
              {" "}
              <Link
                to="/admin/product/add"
                className="btn btn-success buttons-csv buttons-html5"
              >
                <i className="fas fa-plus mx-1" />
                <span>Add Product</span>
              </Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="row">
              {/* <div id="col-sm-6 example1_filter" className="dataTables_filter">
                <label>
                  :
                  <input
                    type="search"
                    className="form-control form-control-sm"
                    aria-controls="example1"
                  />
                </label>
              </div> */}
              <div className="form-group col-sm-6 dataTables_filter">
                {/* <label>Search:</label> */}
                <div
                  className="input-group "
                  style={{ height: "calc(2.25rem + 2px)" }}
                >
                  <input
                    type="text"
                    className="form-control datetimepicker-input"
                    style={{ height: "100%", padding: "5px" }}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <i className="icon-search" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 form-group dataTables_filter">
                {/* <label>State</label> */}
                <select
                  className="form-control select2 select2-hidden-accessible"
                  style={{ width: "100%" }}
                  onChange={handleSelect}
                >
                  <option selected="selected" value="preview">
                    All
                  </option>
                  <option value="live">Publish</option>
                  {/* <option value='draft'>Draft</option> */}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <table
              id="example1"
              className="table table-bordered table-striped dataTable dtr-inline"
              aria-describedby="example1_info"
            >
              <thead>
                <tr>
                  <th
                    className="sorting"
                    tabIndex={0}
                    aria-controls="example1"
                    rowSpan={1}
                    colSpan={1}
                    aria-label="Browser: activate to sort column ascending"
                  >
                    STT
                  </th>
                  <th
                    className="sorting "
                    tabIndex={0}
                    aria-controls="example1"
                    rowSpan={1}
                    colSpan={1}
                    aria-sort="ascending"
                    aria-label="Rendering engine: activate to sort column descending"
                  >
                    Image
                  </th>
                  <th
                    className="sorting"
                    tabIndex={0}
                    aria-controls="example1"
                    rowSpan={1}
                    colSpan={1}
                    aria-label="Browser: activate to sort column ascending"
                  >
                    Product Name
                  </th>
                  <th
                    className="sorting"
                    tabIndex={0}
                    aria-controls="example1"
                    rowSpan={1}
                    colSpan={1}
                    aria-label="Platform(s): activate to sort column ascending"
                  >
                    Price
                  </th>
                  <th
                    className="sorting"
                    tabIndex={0}
                    aria-controls="example1"
                    rowSpan={1}
                    colSpan={1}
                    aria-label="Engine version: activate to sort column ascending"
                  >
                    Publish
                  </th>
                  <th
                    className="sorting"
                    tabIndex={0}
                    aria-controls="example1"
                    rowSpan={1}
                    colSpan={1}
                    aria-label="CSS grade: activate to sort column ascending"
                  >
                    Action
                  </th>
                  <th
                    className="sorting"
                    tabIndex={0}
                    aria-controls="example1"
                    rowSpan={1}
                    colSpan={1}
                    aria-label="CSS grade: activate to sort column ascending"
                  >
                    Id
                  </th>
                </tr>
              </thead>
              {myView}
            </table>

            {totalPage > 1 && (
              <div className="row" style={{ justifyContent: "center" }}>
                <Paginate
                  totalPage={totalPage}
                  currentPage={pageNum ? pageNum : 1}
                  basePath="http://localhost:3000/admin/product/page/"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
