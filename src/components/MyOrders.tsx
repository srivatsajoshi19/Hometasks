import { useSelector } from "react-redux";

const MyOrders = () => {
  let orderedBooks = useSelector((state: any) => state.allBooks.prevOrders);

  const orderedItems = (book: any) => {
    const { id, imageLink, price, title } = book;
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={id}>
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src={imageLink} alt={title} height="200px" width="180px" />
            </div>
            <div className="col-md-4">
              <h3>{title}</h3>
              <p className="lead fw-bold">${price}</p>
              <p className="fw-light">Status: Delivered</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const noOrders = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>No Previous Orders</h3>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      {orderedBooks.length === 0 && noOrders()}
      {orderedBooks.length !== 0 && orderedBooks.map(orderedItems)}
    </>
  );
};

export default MyOrders;
