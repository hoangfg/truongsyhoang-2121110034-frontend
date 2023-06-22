import React from "react";
import { Link } from "react-router-dom";

export default function AdminTopicItem(props) {
  var topic = props.topic;
  console.log(topic);
  var stt = props.stt;
  //   console.log(stt)
  var handleDelete = props.handleDelete;
  var handlePublish = props.handlePublish;
  var myView =
    topic.attributes.publishedAt === null ? (
      <input
        style={{ width: "2em" }}
        onClick={handlePublish}
        name={topic.id}
        type="range"
        min="0"
        max="1"
        value="0"
      />
    ) : (
      <input
        style={{ width: "2em" }}
        onClick={handlePublish}
        name={topic.id}
        type="range"
        min="0"
        max="1"
        value="1"
      />
    );
  // console.log(Topic)
  return (
    <tr className="even">
      <td>{stt}</td>

      <td>{topic.attributes.topicName}</td>

      <td>{myView}</td>
      <td>
        <i
          className="icon-eye-open btn mx-1"
          style={{ color: "#02f24a" }}
          name={topic.id}
        />

        <i
          className="icon-remove btn mx-1"
          style={{ color: "#f00a21" }}
          name={topic.id}
          onClick={handleDelete}
        />

        <Link to={"/admin/Topic/edit/" + topic.id}>
          <i className="icon-edit btn mx-1" name={topic.id} />
        </Link>
      </td>
      <td>{topic.id}</td>
    </tr>
  );
}
