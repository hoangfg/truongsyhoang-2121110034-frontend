import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppUrl from "../../../Api/AppUrl";
import { topicApi } from "../../../Api/topicApi";
export default function AdminTopicAdd() {
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
      const addTopic = async (data) => {
        var sendData = {
          data: data,
        };
        try {
          document.getElementById("btnAddTopic").innerText = "Create.....";
          const response = await topicApi.add(sendData);
          console.log();
          if (response.status == 200) {
            toast.success("Thêm chủ đề thành công");
            document.getElementById("createTopic").reset();
            document.getElementById("btnAddTopic").innerText = "Submit";

            setData({
              topicName: "",
              description: "",
            });
          }
          // console.log(sendData.data.image);
        } catch (error) {
          toast.error("Thêm chủ đề thất bại \n" + error);
        }
        window.scroll(0, 0);
      };
      addTopic(data);
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
        <form id="createTopic" onSubmit={handleSubmit}>
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
                    Mô tả chủ đề
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="d-flex justify-content-end col-12">
              <button
                id="btnAddTopic"
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
