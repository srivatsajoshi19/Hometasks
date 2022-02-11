import  { useEffect } from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getBooks } from "../state/reducers/bookReducer";
import BookComponent from "./BookComponent";

const BookListing = () => {
  const books = useSelector((state: any) => state.allBooks.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  if (!books.length) {
    return <h1>loading ...</h1>;
  }
  return (
    <div className="grid container">
      {books.map((book: any, index: number) => (
        <BookComponent book={book} key={index} />
      ))}
    </div>
  );
};

export default BookListing;
