import React, { useEffect, useState } from "react";
import SelectBox from "./SelectBox";
import { topicApi } from "../Api/topicApi";

export default function TopicSelect(props) {
  var [topics, setTopics] = useState([]);
  var [loading, setLoading] = useState(true);
  const handleChange = props.handleChange;
  const defaultValue =
    props.defaultValue !== undefined ? props.defaultValue : 0;
  var myView =
    loading === true ? (
      <select className="custom-select" style={{ width: "100%" }}>
        <option value="">Loading topics</option>
      </select>
    ) : (
      <SelectBox
        name="topic"
        data={topics}
        handleChange={handleChange}
        defaultValue={defaultValue}
      />
    );
  useEffect(() => {
    const fetchData = async () => {
      var response = await topicApi.getAll();
      var temp = response.data.data;

      setTopics(
        temp.map((topic) => {
          return {
            label: topic.attributes.topicName,
            value: topic.id,
          };
        })
      );
      setLoading(false);
    };
    fetchData();
  }, []);
  return <>{myView}</>;
}
