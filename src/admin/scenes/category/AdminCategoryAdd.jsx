import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppUrl from "../../../Api/AppUrl";
import { categoryApi } from "../../../Api/categoryApi";
export default function AdminCategoryAdd() {
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
      const addCategory = async (data) => {
        var sendData = {
          data: data,
        };
        try {
          document.getElementById("btnAddCategory").innerText = "Create.....";
          const response = await categoryApi.add(sendData);
          console.log();
          if (response.status == 200) {
            toast.success("Thêm danh mục thành công");
            document.getElementById("createCategory").reset();
            document.getElementById("btnAddCategory").innerText = "Submit";

            setData({
              categoryName: "",
              description: "",
            });
          }
          // console.log(sendData.data.image);
        } catch (error) {
          toast.error("Thêm danh mục thất bại \n" + error);
        }
        window.scroll(0, 0);
      };
      addCategory(data);
    } else {
      toast.error(err);
      return false;
    }
  };

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
        <form id="createCategory" onSubmit={handleSubmit}>
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
                id="btnAddCategory"
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
