import React from "react";
import { Row, Col } from "react-bootstrap";
import Products from "../products";
import Product from "../Components/Product";
const HomeScreen = () => {
  return (
    <>
      <h1>LIST OF PRODUCTS</h1>
      <Row>
        {Products.map((product) => {
          return (
            <Col sm={12} md={6} xl={3}>
              <Product key={product._id} product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
