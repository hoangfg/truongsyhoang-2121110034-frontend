import axios from "axios";
import React, { useState } from "react";

export default function FileUpload(props) {
  var [file, setFile] = useState(null);
  const addImage = props.addImage

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    // console.log("chon file", e.target.files);
  };
  const handleUpload = async (e) => {
    // console.log("send file", file);
    const data = new FormData();
    data.append("files", file);
    e.target.innerText = "Uploading...";
    const response = await axios({
      method: "POST",
      url: "http://localhost:1337/api/upload",
      data,
    });
    e.target.innerText = "Upload";
    var id = response.data[0].id;
    var name = response.data[0].name;

    var url = response.data[0].url;
    addImage(id, url, name)
    // console.log(data)
    // console.log("id", id);
  };

  return (
    <div
      className="fileUpload d-flex justify-content-between"
      style={{ height: "40px" }}
    >
      <input style={{ height: "100%" }} name='image' type="file" onChange={handleChange} />
      <button className="btn btn-success" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
}
