import product from "../product";

function Price() {
  return (
    <h4 style={{ color: "#6f42c1", fontWeight: "bold" }}>
      {product.price}
    </h4>
  );
}

export default Price;