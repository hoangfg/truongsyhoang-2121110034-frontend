import React, { useEffect, useState } from "react";
import Paginate from "../../../components/Paginate";
import { Link, useParams } from "react-router-dom";
import { topicApi } from "./../../../Api/topicApi";
import Loading from "../../../components/Loading";
import AdminTopicItem from "./AdminTopicItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postApi } from "../../../Api/postApi";
export default function AdminTopicBox() {
  var [categories, setCategories] = useState({});
  var [loading, setLoading] = useState(true);
  var [totalPage, setTotalPage] = useState(1);
  const [msgSuccess, setMsgSuccess] = useState("");
  const [msgWarning, setMsgwarning] = useState("");
  const [loadData, setLoadData] = useState(1);
  const [viewOption, setViewOption] = useState("preview");
  var { pageNum } = useParams();

  const handleDelete = (e) => {
    var topicId = e.target.getAttribute("name");

    const deleteTopic = async (id) => {
      var c = window.confirm("Remove Topic");
      if (c === true) {
        try {
          const posts = await postApi.getListByTopicID(topicId);
          if (posts.data.data.length > 0) {
            toast.warning("Tôn tại sản phẩm không thể xóa thương hiệu");
          } else {
            e.target.classList.remove("icon-remove");
            e.target.classList.add("icon-spinner");
            await topicApi.delete(id);
            toast.success("Xóa danh mục thành công");
          }
        } catch (error) {
          toast.success("Xóa thất bại ", error);
        } finally {
          setLoadData(loadData + 1);
          window.scroll(0, 0);
          e.target.classList.remove("icon-spinner");
          e.target.classList.add("icon-remove");
        }
      }
    };
    deleteTopic(e.target.getAttribute("name"));
  };
  const handleSelect = (e) => {
    setViewOption(e.target.value);
  };
  // const handlePublish = (e) => {
  //
  //   const togglePublish = async (e) => {

  //     await topicApi.update(e.target.getAttribute("name"), data);
  //     setLoadData(loadData + 1);
  //     toast.success("Thay đổi trạng tháu thành công");
  //     // console.log(e.target.value);
  //   };
  //   togglePublish(e);
  // };

  const handlePublish = async (e) => {
    // Kiểm tra nếu giá trị e.target.value là "0"
    var topicId = e.target.getAttribute("name");
    var data = {
      data: {
        publishedAt: e.target.value == 0 ? Date.now() : null,
      },
    };
    if (e.target.value == 0) {
      await topicApi.update(topicId, data);
      toast.success("Thay đổi trạng thái thành công");
    } else {
      // var params = {
      //   populate: "*",
      //   data: {
      //     topic: {
      //       data: {
      //         id: 6,
      //       },
      //     },
      //   },
      // };
      const posts = await postApi.getListByTopicID(topicId);
      if (posts.data.data.length > 0) {
        //  const c = window.confirm(
        //    "Nếu thay đổi sẽ làm thay đổi toàn bộ sản phẩm liên quan"
        //  );
        //  if (c) {
        //    var dataP = {
        //      data: {
        //        publishedAt: null,
        //      },
        //    };
        toast.warning("Tôn tại sản phẩm không thể thay đôi");
      } else {
        await topicApi.update(topicId, data);

        toast.success("Thay đổi trạng thái thành công");
      }
    }

    setLoadData(loadData + 1);
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
      {loading === true ? (
        <tr>
          <td colSpan="12">
            <div className="text-center">
              <Loading />
            </div>
          </td>
        </tr>
      ) : (
        categories.map((topic, i) => (
          <AdminTopicItem
            handleDelete={handleDelete}
            handlePublish={handlePublish}
            key={topic.id}
            stt={
              (params.pagination.page - 1) * params.pagination.pageSize + i + 1
            }
            topic={topic}
          />
        ))
      )}
    </tbody>
  );
  useEffect(() => {
    const fatchData = async () => {
      const response = await topicApi.getAll(params);
      setCategories(response.data.data);
      setTotalPage(response.data.meta.pagination.pageCount);
      //   console.log(pageNum);
      setLoading(false);
    };
    fatchData();
  }, [viewOption, pageNum, loadData]);
  return (
    <div className="card-body">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {/* <div className="col-12">
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
      </div> */}
      <div id="example1_wrapper" className="dataTables_wrapper dt-bootstrap4">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="dt-buttons btn-group flex-wrap">
              {" "}
              <Link
                to="/admin/topic/add"
                className="btn btn-success buttons-csv buttons-html5"
              >
                <i className="fas fa-plus mx-1" />
                <span>Add Topic</span>
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
                    categoryName
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
                  basePath="http://localhost:3000/admin/topic/page/"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
