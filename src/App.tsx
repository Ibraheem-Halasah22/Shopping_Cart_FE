import { Container } from "react-bootstrap";
import Router from "./Router";
import { Navbar } from "./components";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Router />
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
