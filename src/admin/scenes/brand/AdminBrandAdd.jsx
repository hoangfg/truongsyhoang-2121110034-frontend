import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppUrl from "../../../Api/AppUrl";
import { brandApi } from "../../../Api/brandApi";
export default function AdminBrandAdd() {
  const [loadData, setLoadData] = useState(1);
  const [data, setData] = useState({
    brandName: "",
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
    if (data.brandName == "") {
      err += "Brand Name is required \n";
    }
    if (data.description == "") {
      err += "Description is required \n";
    }

    if (err === "") {
      const addBrand = async (data) => {
        var sendData = {
          data: data,
        };
        try {
          document.getElementById("btnAddBrand").innerText = "Create.....";
          const response = await brandApi.add(sendData);
          console.log();
          if (response.status == 200) {
            toast.success("Thêm danh mục thành công");
            document.getElementById("createBrand").reset();
            document.getElementById("btnAddBrand").innerText = "Submit";

            setData({
              brandName: "",
              description: "",
            });
          }
          // console.log(sendData.data.image);
        } catch (error) {
          toast.error("Thêm danh mục thất bại \n" + error);
        }
        window.scroll(0, 0);
      };
      addBrand(data);
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
        <form id="createBrand" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12">
              <div className="form-group row" style={{ height: "40px" }}>
                <label htmlFor="brandName" className="col-3 col-form-label">
                  brandName
                </label>
                <div className="col-9">
                  <input
                    style={{ height: "100%" }}
                    id="brandName"
                    name="brandName"
                    placeholder="brandName"
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
                    Mô tả thương hiệu
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="d-flex justify-content-end col-12">
              <button
                id="btnAddBrand"
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
