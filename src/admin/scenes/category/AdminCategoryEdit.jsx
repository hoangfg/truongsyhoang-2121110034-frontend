import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppUrl from "../../../Api/AppUrl";
import { categoryApi } from "../../../Api/categoryApi";
import { useParams } from "react-router-dom";
export default function AdminCategoryEdit() {
  const { id } = useParams();
  const [loadData, setLoadData] = useState(1);
  const [data, setData] = useState({
    categoryName: "",
    description: "",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    // ?console.log('data', data)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    var err = "";
    if (data.categoryName == "") {
      err += "Category Name is required \n";
    }
    if (data.description == "") {
      err += "Description is required \n";
    }

    if (err === "") {
      const updateCategory = async (data) => {
        var sendData = {
          data: data,
        };
        try {
          document.getElementById("btnUpdateCategory").innerText =
            "Update.....";
          const response = await categoryApi.update(id, sendData);
          console.log();
          if (response.status == 200) {
            toast.success("Thay đổi danh mục thành công");
            document.getElementById("updateCategory").reset();
            document.getElementById("btnUpdateCategory").innerText = "Submit";

            setData({
              categoryName: data.categoryName,
              description: data.description,
            });
          }
          // console.log(sendData.data.image);
        } catch (error) {
          toast.error("Thay đổi danh mục thất bại \n" + error);
        }
        window.scroll(0, 0);
      };
      updateCategory(data);
    } else {
      toast.error(err);
      return false;
    }
  };
  useEffect(() => {
    const fetchData = async (e) => {
      var response = await categoryApi.get(id);
      // console.log(response);
      var oldCate = response.data.data;
      setData({
        categoryName: oldCate.attributes.categoryName,
        description: oldCate.attributes.description,
      });
      // console.log(data)
    };
    fetchData();
  }, [id]);
  return (
    <div className="row">
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
      <div className="col-12">
        <form id="updateCategory" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12">
              <div className="form-group row" style={{ height: "40px" }}>
                <label htmlFor="categoryName" className="col-3 col-form-label">
                  categoryName
                </label>
                <div className="col-9">
                  <input
                    style={{ height: "100%" }}
                    id="categoryName"
                    name="categoryName"
                    placeholder="categoryName"
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    value={data.categoryName}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="description" className="col-3 col-form-label">
                  Description
                </label>
                <div className="col-9">
                  <textarea
                    id="description"
                    name="description"
                    cols={40}
                    rows={4}
                    className="form-control"
                    aria-describedby="descriptionHelpBlock"
                    defaultValue={""}
                    onChange={handleChange}
                    value={data.description}
                  />
                  <span
                    id="descriptionHelpBlock"
                    className="form-text text-muted"
                  >
                    Mô tả danh mục
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="d-flex justify-content-end col-12">
              <button
                id="btnUpdateCategory"
                name="submit"
                type="submit"
                className="btn btn-primary justify-content-end"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
