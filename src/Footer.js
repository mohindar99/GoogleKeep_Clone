import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="basic">copy right © {year}</div>
    </>
  );
};

export default Footer;
