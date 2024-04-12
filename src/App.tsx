import { Container } from "react-bootstrap";
import Router from "./Router";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Router />
      </Container>
    </>
  );
}

export default App;
