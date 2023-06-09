import React from "react";
import { Link } from "react-router-dom";

export default function AdminCategoryItem(props) {
  var category = props.category;
  // console.log(category);
  var stt = props.stt;
  //   console.log(stt)
  var handleDelete = props.handleDelete;
  var handlePublish = props.handlePublish;
  var myView =
    category.attributes.publishedAt === null ? (
      <input
        style={{ width: "2em" }}
        onClick={handlePublish}
        name={category.id}
        type="range"
        min="0"
        max="1"
        value="0"
      />
    ) : (
      <input
        style={{ width: "2em" }}
        onClick={handlePublish}
        name={category.id}
        type="range"
        min="0"
        max="1"
        value="1"
      />
    );
  // console.log(category)
  return (
    <tr className="even">
      <td>{stt}</td>

      <td>{category.attributes.categoryName}</td>

      <td>{myView}</td>
      <td>
        <i
          className="icon-eye-open btn mx-1"
          style={{ color: "#02f24a" }}
          name={category.id}
        />

        <i
          className="icon-remove btn mx-1"
          style={{ color: "#f00a21" }}
          name={category.id}
          onClick={handleDelete}
        />

        <Link to={"/admin/category/edit/" + category.id}>
          <i className="icon-edit btn mx-1" name={category.id} />
        </Link>
      </td>
      <td>{category.id}</td>
    </tr>
  );
}
