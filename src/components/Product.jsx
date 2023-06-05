function Product(props) {
  return (
    <div
      style={{
        width: 500,
        height: 200,
        backgroundColor: "red",
        
      }}
    >
      <img src={props.gambar} style={{ width: 32, height: 64 }} />
      <h3>{props.namaProduk}</h3>
      <p>{props.hargaProduk}</p>
    </div>
  );
}

export default Product;
