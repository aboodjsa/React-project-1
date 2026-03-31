import product from "../product";

function Description() {
  return (
    <p style={{ color: "#555", fontSize: "15px" }}>
      {product.description}
    </p>
  );
}

export default Description;