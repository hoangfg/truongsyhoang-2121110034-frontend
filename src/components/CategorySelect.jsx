import React, { useEffect, useState } from "react";
import SelectBox from "./SelectBox";
import { categoryApi } from "./../Api/categoryApi";

export default function CategorySelect(props) {
  var [categories, setCategories] = useState([]);
  var [loading, setLoading] = useState(true);
  const defaultValue =
    props.defaultValue !== undefined ? props.defaultValue : 0;
  // console.log(defaultValue);
  const handleChange = props.handleChange;
  var myView =
    loading === true ? (
      <select className="custom-select">
        <option value="">Loading categories</option>
      </select>
    ) : (
      <SelectBox
        name="category"
        defaultValue={defaultValue}
        data={categories}
        handleChange={handleChange}
      />
    );
  useEffect(() => {
    const fetchData = async () => {
      var response = await categoryApi.getAll();
      var temp = response.data.data;

      setCategories(
        temp.map((category) => {
          return {
            label: category.attributes.categoryName,
            value: category.id,
          };
        })
      );
      setLoading(false);
    };
    fetchData();
  }, []);
  return <>{myView}</>;
}
