import React from "react";

export default function SelectBox(props) {
  var name = props.name;
  var data = props.data;
  const handleChange = props.handleChange;
  var defaultValue = props.defaultValue;
  var myView = data.map((dataItem) => {
    return <option value={dataItem.value}>{dataItem.label}</option>;
  });
  if (defaultValue === 0) {
    myView.unshift(<option value="0">----------</option>);
  }
  return (
    <select
      name={name}
      defaultValue={defaultValue}
      onChange={handleChange}
      style={{ width: "100%" }}
    >
      {/* <option value="0">----------</option> */}
      {myView}
    </select>
  );
}
