import React from "react";
import { Link } from "react-router-dom";

export default function AdminBrandItem(props) {
  var brand = props.brand;
  // console.log(brand);
  var stt = props.stt;
  //   console.log(stt)
  var handleDelete = props.handleDelete;
  var handlePublish = props.handlePublish;
  var myView =
    brand.attributes.publishedAt === null ? (
      <input
        style={{ width: "2em" }}
        onClick={handlePublish}
        name={brand.id}
        type="range"
        min="0"
        max="1"
        value="0"
      />
    ) : (
      <input
        style={{ width: "2em" }}
        onClick={handlePublish}
        name={brand.id}
        type="range"
        min="0"
        max="1"
        value="1"
      />
    );
  // console.log(brand)
  return (
    <tr className="even">
      <td>{stt}</td>

      <td>{brand.attributes.brandName}</td>

      <td>{myView}</td>
      <td>
        <i
          className="icon-eye-open btn mx-1"
          style={{ color: "#02f24a" }}
          name={brand.id}
        />

        <i
          className="icon-remove btn mx-1"
          style={{ color: "#f00a21" }}
          name={brand.id}
          onClick={handleDelete}
        />

        <Link to={"/admin/brand/edit/" + brand.id}>
          <i className="icon-edit btn mx-1" name={brand.id} />
        </Link>
      </td>
      <td>{brand.id}</td>
    </tr>
  );
}
