import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-2">
        <Container>
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/" component={HomeScreen} exact />
          <Route path="/cart/:id?" component={CartScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
