import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppUrl from "../../../Api/AppUrl";
import { topicApi } from "../../../Api/topicApi";
import { useParams } from "react-router-dom";
export default function AdminTopicEdit() {
  const { id } = useParams();
  const [loadData, setLoadData] = useState(1);
  const [data, setData] = useState({
    topicName: "",
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
    if (data.topicName == "") {
      err += "Topic Name is required \n";
    }
    if (data.description == "") {
      err += "Description is required \n";
    }

    if (err === "") {
      const updateTopic = async (data) => {
        var sendData = {
          data: data,
        };
        try {
          document.getElementById("btnUpdateTopic").innerText =
            "Update.....";
          const response = await topicApi.update(id, sendData);
          console.log();
          if (response.status == 200) {
            toast.success("Thay đổi thương hiệu thành công");
            document.getElementById("updateTopic").reset();
            document.getElementById("btnUpdateTopic").innerText = "Submit";

            setData({
              topicName: data.topicName,
              description: data.description,
            });
          }
          // console.log(sendData.data.image);
        } catch (error) {
          toast.error("Thay đổi thương hiệu thất bại \n" + error);
        }
        window.scroll(0, 0);
      };
      updateTopic(data);
    } else {
      toast.error(err);
      return false;
    }
  };
  useEffect(() => {
    const fetchData = async (e) => {
      var response = await topicApi.get(id);
      // console.log(response);
      var oldCate = response.data.data;
      setData({
        topicName: oldCate.attributes.topicName,
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
        <form id="updateTopic" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12">
              <div className="form-group row" style={{ height: "40px" }}>
                <label htmlFor="topicName" className="col-3 col-form-label">
                  topicName
                </label>
                <div className="col-9">
                  <input
                    style={{ height: "100%" }}
                    id="topicName"
                    name="topicName"
                    placeholder="topicName"
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    value={data.topicName}
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
                id="btnUpdateTopic"
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
