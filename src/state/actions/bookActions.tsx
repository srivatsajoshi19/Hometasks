import { bookActionTypes } from "../constants/bookActionTypes";

export const addBooksToCart = (book: any) => {
  return {
    type: bookActionTypes.ADDTOCART,
    payload: book,
  };
};

export const removeFromCart = (book: {}) => {
  return {
    type: bookActionTypes.REMOVEFROMCART,
    payload: book,
  };
};

export const addToOrders = (books: any) => {
  return {
    type: bookActionTypes.ADDTOMYORDERS,
    payload: books,
  };
};

export const selectedBook = (book: any) => {
  return {
    type: bookActionTypes.SELECTEDBOOK,
    payload: book,
  };
};

export const clearCart = () => {
  return {
    type: bookActionTypes.CLEARCART,
  };
};
