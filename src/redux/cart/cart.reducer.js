import { ADD_ARTICLE_TO_CART, DELETE_ARTICLE_FROM_CART } from "./cart.types";

const initialCartState = {
  articles: [],
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_ARTICLE_TO_CART:
      return {
        ...state,
        articles: [...state.articles, action.payload],
      };
    case DELETE_ARTICLE_FROM_CART:
      return {
        ...state,
        articles: [
          state.articles.filter((article) => article.ean !== action.payload),
        ],
      };
    default:
      return state;
  }
};

export default cartReducer;
