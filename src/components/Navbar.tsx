import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "./ShoppingCartIcon";
import RedBadge from "./RedBadge";
import { useShoppingCart } from "../context/ShoppingCartContext";
function Navbar() {
  const { cartQuantity, openCart } = useShoppingCart();

  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
          >
            <ShoppingCartIcon />
            <RedBadge color="white" width="1.5rem" height="1.5rem">
              {cartQuantity}
            </RedBadge>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
}

export default Navbar;
