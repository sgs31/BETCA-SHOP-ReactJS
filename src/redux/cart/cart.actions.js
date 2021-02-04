import { ADD_ARTICLE_TO_CART, DELETE_ARTICLE_FROM_CART } from "./cart.types";

export const addArticleToCart = (article) => {
  return {
    type: ADD_ARTICLE_TO_CART,
    payload: article,
  };
};

export const deleteArticleFromCart = (ean) => {
  return {
    type: DELETE_ARTICLE_FROM_CART,
    payload: ean,
  };
};
