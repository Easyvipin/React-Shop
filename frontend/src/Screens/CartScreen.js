import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Button,
  ListGroup,
  FormControl,
  ListGroupItem,
  Image,
  Card,
} from "react-bootstrap";
import { addToCart, removeFromCart } from "../Actions/cartActions";
import Message from "../Components/Message";

const CartScreen = ({ match, history, location }) => {
  const dispatch = useDispatch();
  const productId = match.params.id;
  const getQty = Number(location.search ? location.search.split("=")[1] : 1);

  const cartItems = useSelector((state) => state.cart.cartItems);

  React.useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, getQty));
    }
  }, [dispatch, productId, getQty]);

  const handleCheckout = (items) => {
    history.push("/login?shipping=");
  };
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <Row>
      <Col md={8}>
        <h2>YOUR CART</h2>
        {cartItems.length === 0 ? (
          <Message>You have no items in cart</Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroupItem>
                <Row>
                  <Col md={3}>
                    <Image src={item.image} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <FormControl
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </FormControl>
                  </Col>
                  <Col md={1}>
                    <i
                      class="fas fa-trash"
                      onClick={() => handleRemove(item.product)}
                    ></i>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup>
            <ListGroupItem>
              <h2>
                SUBbTOTAL ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                ITEM
              </h2>
            </ListGroupItem>
            <ListGroupItem>
              Total :
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroupItem>
            <ListGroupItem>
              <Button
                type="button"
                className="btn-block"
                onClick={() => handleCheckout(cartItems)}
              >
                PROCEED CHECKOUT
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
