import React from "react";
import { Link } from "react-router-dom";
import AppUrl from "../../../Api/AppUrl";
import currency from "currency.js";
import AdminCategoryDetail from "../category/AdminCategoryDetail";

export default function AdminPostItem(props) {
  var post = props.post;
  console.log(post);
  var stt = props.stt;
  var handleShow = props.handleShow;
  var handleDelete = props.handleDelete;
  var handlePublish = props.handlePublish;
  var myView =
    post.attributes.publishedAt === null ? (
      <input
        onClick={handlePublish}
        name={post.id}
        type="range"
        min="0"
        max="1"
        value="0"
      />
    ) : (
      <input
        onClick={handlePublish}
        name={post.id}
        type="range"
        min="0"
        max="1"
        value="1"
      />
    );
  // console.log(post)
  return (
    <>
      <tr className="even">
        <td>{stt}</td>
        <td
          className="sorting_1 dtr-control"
          style={{ width: "100px", height: "100px" }}
        >
          <img
            src={
              AppUrl.ImageURL + post.attributes.image.data.attributes.url
            }
            alt="post.postName"
            style={{ width: "100%", height: "100%" }}
          />
        </td>
        <td>{post.attributes.postTitle}</td>
       
        <td>{myView}</td>
        <td>
          {/* <Link to={ '/admin/post/'+post.id }> */}
          <i
            className="icon-eye-open btn mx-1"
            style={{ color: "#02f24a" }}
            name={post.id}
            onClick={handleShow}
            data-toggle="modal"
            data-target="#modal-lg"
          />
          {/* </Link> */}
          
          <i
            className="icon-remove btn mx-1"
            style={{ color: "#f00a21" }}
            name={post.id}
            onClick={handleDelete}
          />

          <Link to={"/admin/post/edit/" + post.id}>
            <i className="icon-edit btn mx-1" name={post.id} />
          </Link>
        </td>
        <td>{post.id}</td>
      </tr>
    </>
  );
}
