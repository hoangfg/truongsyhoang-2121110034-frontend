import React, { useEffect, useState } from "react";
import SelectBox from "./SelectBox";
import { brandApi } from "../Api/brandApi";

export default function BrandSelect(props) {
  var [brands, setBrands] = useState([]);
  var [loading, setLoading] = useState(true);
  const handleChange = props.handleChange;
  const defaultValue =
    props.defaultValue !== undefined ? props.defaultValue : 0;
  var myView =
    loading === true ? (
      <select className="custom-select" style={{ width: "100%" }}>
        <option value="">Loading brands</option>
      </select>
    ) : (
      <SelectBox
        name="brand"
        data={brands}
        handleChange={handleChange}
        defaultValue={defaultValue}
      />
    );
  useEffect(() => {
    const fetchData = async () => {
      var response = await brandApi.getAll();
      var temp = response.data.data;

      setBrands(
        temp.map((brand) => {
          return {
            label: brand.attributes.brandName,
            value: brand.id,
          };
        })
      );
      setLoading(false);
    };
    fetchData();
  }, []);
  return <>{myView}</>;
}
