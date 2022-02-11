import axios from "axios";
import { bookActionTypes } from "../constants/bookActionTypes";

const initialState = {
  books: [],
  booksInCart: [],
  prevOrders: [],
  selectedBook: {},
};

export const getBooks = () => async (dispatch: any) => {
  const response = await axios.get("http://localhost:3000/books");
  dispatch({
    type: bookActionTypes.SETBOOKS,
    payload: response.data,
  });
};

export const bookReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case bookActionTypes.SETBOOKS:
      return { ...state, books: payload };

    case bookActionTypes.ADDTOCART:
      return { ...state, booksInCart: [...state.booksInCart, payload] };

    case bookActionTypes.REMOVEFROMCART:
      return {
        ...state,
        booksInCart: state.booksInCart.filter(
          (book: any) => book.id !== payload.id
        ),
      };
    case bookActionTypes.ADDTOMYORDERS:
      return { ...state, prevOrders: [...state.prevOrders, ...payload] };

    case bookActionTypes.SELECTEDBOOK:
      return { ...state, selectedBook: payload };

    case bookActionTypes.CLEARCART:
      return { ...state, booksInCart: [] };

    default:
      return state;
  }
};
