import { Card, Container } from "react-bootstrap";
import Name from "./components/name";
import Price from "./components/price";
import Description from "./components/description";
import Image from "./components/image";
import profileImage from "./images/abood.jpg";

const firstName = "Abood";

function App() {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <Card
        style={{
          width: "22rem",
          borderRadius: "15px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          padding: "15px",
          transition: "transform 0.2s",
        }}
      >
        <Image />

        <Card.Body style={{ textAlign: "center" }}>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <h3 style={{ marginTop: "25px" }}>
        {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
      </h3>

      {firstName && (
        <img
  src={profileImage}
  alt="Abood"
  style={{
    width: "90px",
    marginTop: "10px",
    borderRadius: "50%"
  }}
/>
      )}
    </Container>
  );
}

export default App;