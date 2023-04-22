import React from "react";
import "./Btn.css";

const Btn = ({ handleNextPage, handlePrevPage }) => {
  return (
    <div className="btn">
      <button onClick={handlePrevPage}>前へ</button>
      <button onClick={handleNextPage}>次へ</button>
    </div>
  );
};

export default Btn;
