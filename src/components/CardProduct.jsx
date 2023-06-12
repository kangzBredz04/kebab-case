import "./CardProduct.css";

function CardProduct(props) {
  return (
    <div className="card-product">
      <div className="imageJersey">
        <img src={props.alamat} alt="" />
      </div>
      <div className="description-product">
        <h4>{props.nama}</h4>
        <p>{props.harga}</p>
      </div>
    </div>
  );
}

export default CardProduct;
