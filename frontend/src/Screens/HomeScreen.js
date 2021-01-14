import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";

import Product from "../Components/Product";
import { listsProducts } from "../Actions/productsActions";
import Loader from "../Components/Loader";
import Message from "../Components/Message";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const { loading, error, products } = useSelector(
    (state) => state.productList
  );
  React.useEffect(() => {
    dispatch(listsProducts());
  }, [dispatch]);
  return (
    <>
      <h1>LIST OF PRODUCTS</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message />
      ) : (
        <Row>
          {products.map((product) => {
            return (
              <Col sm={12} md={6} xl={3}>
                <Product key={product._id} product={product} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
