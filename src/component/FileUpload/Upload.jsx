import React, { useState } from "react";
import "./upload.scss";

const Upload = () => {
  return (
    <input
      type="file"
      className="form-control "
      id="attachments"
      name="attachments[]"
      multiple=""
    ></input>
  );
};

export default Upload;
