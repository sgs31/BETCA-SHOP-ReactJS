import React from "react";
import Article from "./Article.jsx";
import "./stless/ArticlesShop.css";

const ArticlesShop = () => {
  return (
    <div className="table-article-user">
      {articulos.map((value, index) => {
        return (
          <div className="article-user" key={index}>
            <Article articles={value} />
          </div>
        );
      })}
    </div>
  );
};

export default ArticlesShop;
