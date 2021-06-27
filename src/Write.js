// import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Write() {
  let history = useHistory();

  return (
    <div>
      <div className="category">Write</div>
      <div className="input">
        <input
          className="input__title"
          placeholder="제목을 입력하세요"
          required
        ></input>
        <textarea className="input__content" required></textarea>
      </div>
      <div className="btn-container">
        <button
          className="back-btn"
          onClick={() => {
            history.goBack();
          }}
        >
          취소
        </button>
        <button className="upload-btn">완료</button>
      </div>
    </div>
  );
}

export default Write;
