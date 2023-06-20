import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function CkeditorBox(props) {
//   const CkeditorBox = ({ description, setDescription }) => {
    const id = props.id;
    const name = props.name;
   const value = props.value;
   const onChange = props.onChange; 
    // const content = props.content;
    const handleEditorChange = (event, editor) => {
      const newValue = editor.getData();
      onChange(newValue);
    };
    return (
      <CKEditor
        id={id}
        name={name}
        editor={ClassicEditor}
        data={value}
        onChange={handleEditorChange}
        // data={description.description}
        onReady={(editor) => {
          editor.editing.view.change((writer) => {
            writer.setStyle(
              "height",
              "200px",
              editor.editing.view.document.getRoot()
            );
          });
        }}
      />
    );
  };

