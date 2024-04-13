import { Offcanvas, OffcanvasHeader } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

type ShoppingCartProps = {
  isOpen: boolean;
};

function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <OffcanvasHeader closeButton></OffcanvasHeader>
    </Offcanvas>
  );
}

export default ShoppingCart;
