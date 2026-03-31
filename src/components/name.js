import product from "../product";

function Name() {
  return (
    <h2 style={{ fontWeight: "bold", color: "#222" }}>
      {product.name}
    </h2>
  );
}

export default Name;