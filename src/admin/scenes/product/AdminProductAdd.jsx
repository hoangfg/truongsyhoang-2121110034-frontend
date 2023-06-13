import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CategorySelect from "./../../../components/CategorySelect";
import BrandSelect from "../../../components/BrandSelect";
import { validateProduct } from "./../../../helpers/Validate";
import { productApi } from "../../../Api/productApi";
import FileUpload from "../../../components/FileUpload";
import AppUrl from "../../../Api/AppUrl";
export default function AdminProductAdd() {
  const [loadData, setLoadData] = useState(1);
  const [data, setData] = useState({
    productName: "",
    description: "",
    detail: "",
    price: "",
    category: "",
    brand: "",
    image: [],
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
    var err = validateProduct(data);
    if (err === "") {
      const addProduct = async (data) => {
        var sendData = {
          data: data,
        };
        try {
          if (sendData.data.image.length < 1) {
            toast.error("Thêm sản phẩm thất bại, cần ít nhất 1 hình ảnh");
          } else {
            document.getElementById("btnAddProduct").innerText = "Create.....";
            const response = await productApi.add(sendData);
            console.log();
            if (response.status == 200) {
              toast.success("Thêm sản phẩm thành công");
              document.getElementById("createProduct").reset();
              document.getElementById("btnAddProduct").innerText = "Submit";

              setData({
                productName: "",
                description: "",
                detail: "",
                price: "",
                category: "",
                brand: "",
                image: [],
              });
            }
          }
          // console.log(sendData.data.image);
        } catch (error) {
          toast.error("Thêm sản phẩm thất bại" + error);
        }
        window.scroll(0, 0);
      };
      addProduct(data);
    } else {
      toast.error(err);
      return false;
    }
  };

  const [images, setImages] = useState([]);
  const addImage = (id, url, name) => {
    setData({
      ...data,
      image: [...data.image, id],
    });
    setImages([
      ...images,
      {
        id: id,
        url: url,
        name: name,
      },
    ]);
  };
  const handleRemove = (e) => {
    var id = e.target.name;
    setData({
      ...data,
      image: data.image.filter((img) => {
        return img != id;
      }),
    });
    setImages(
      images.filter((img) => {
        return img.id != id;
      })
    );
  };

  var myViewImages =
    images.length == 0 ? (
      <div className="col-3 p-2">
        <img
          src="https://sogddt.camau.gov.vn/no-avatar.png"
          alt="https://sogddt.camau.gov.vn/no-avatar.png"
        />
      </div>
    ) : (
      images.map((img) => {
        console.log(img);
        return (
          <div className="row border-1 border-bottom m-0 pt-3 d-flex justify-content-between">
            <div className="">
              <img
                style={{ width: "80px", objectFit: "cover" }}
                src={AppUrl.ImageURL + img.url}
                alt={img.name}
                name={img.id}
              />
            </div>
            <div className="col-8">
              <div className="row align-self-center">
                <div className="col-10">
                  <span>{img.name}</span>
                </div>
                <div className="col-2">
                  <button
                    onClick={handleRemove}
                    name={img.id}
                    style={{}}
                    className="btn btn-danger"
                  >
                    x
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })
    );
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
      <div className="col-7">
        <form id="createProduct" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12">
              <div className="form-group row" style={{ height: "40px" }}>
                <label htmlFor="productName" className="col-3 col-form-label">
                  productName
                </label>
                <div className="col-9">
                  <input
                    style={{ height: "100%" }}
                    id="productName"
                    name="productName"
                    placeholder="productName"
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
                    Mô tả sản phẩm
                  </span>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="detail" className="col-3 col-form-label">
                  Detail
                </label>
                <div className="col-9">
                  <textarea
                    id="detail"
                    name="detail"
                    cols={40}
                    rows={4}
                    className="form-control"
                    aria-describedby="detailHelpBlock"
                    defaultValue={""}
                    onChange={handleChange}
                  />
                  <span id="detailHelpBlock" className="form-text text-muted">
                    Chi tiết sản phẩm
                  </span>
                </div>
              </div>
              <div className="form-group row" style={{ height: "40px" }}>
                <label className="col-3 col-form-label" htmlFor="price">
                  price
                </label>
                <div className="col-9">
                  <input
                    style={{ height: "100%" }}
                    id="price"
                    name="price"
                    type="number"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="category" className="col-3 col-form-label">
                  Category
                </label>
                <div className="col-9">
                  <CategorySelect handleChange={handleChange} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="brand" className="col-3 col-form-label">
                  Brand
                </label>
                <div className="col-9">
                  <BrandSelect handleChange={handleChange} />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="d-flex justify-content-end col-12">
              <button
                id="btnAddProduct"
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
      <div className="col-5">
        <div className="form-group row">
          <label htmlFor="brand" className="col-3 col-form-label">
            Image
          </label>
          <div className="col-9">
            <FileUpload addImage={addImage} onChange={handleChange} />
            <div id="row uploadImgs">{myViewImages}</div>
          </div>
        </div>
        <div className="form-group row"></div>
        {/* <div className="form-group ">
          <div id="actions" className="row">
            <label htmlFor="brand" className="col-4 col-form-label">
              Image
            </label>
            <div className="col-8">
              <div className="btn-group w-100">
                <span className="btn btn-success col fileinput-button dz-clickable">
                  <i className="fas fa-plus" />
                  <span>Add files</span>
                </span>
                <button
                  type="submit"
                  className="btn btn-primary col start"
                  fdprocessedid="ldvpng"
                >
                  <i className="fas fa-upload" />
                  <span>Start upload</span>
                </button>
                <button
                  type="reset"
                  className="btn btn-warning col cancel"
                  fdprocessedid="z8efin"
                >
                  <i className="fas fa-times-circle" />
                  <span>Cancel upload</span>
                </button>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="fileupload-process w-100">
                <div
                  id="total-progress"
                  className="progress progress-striped active"
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={0}
                  style={{ opacity: 0 }}
                >
                  <div
                    className="progress-bar progress-bar-success"
                    style={{ width: "100%" }}
                    data-dz-uploadprogress
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="table table-striped files" id="previews" />
        </div> */}
      </div>
    </div>
  );
}
