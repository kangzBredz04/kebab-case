import { useState } from "react";
import "./Product.css";
function Product(props) {
  const [like, setLike] = useState(true);
  const [showMore, setShowMore] = useState(false);

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  function handleLike() {
    setLike(!like);
  }

  return (
    <>
      <div className="card-product">
        <div className="imageJersey">
          <img src={props.alamat} alt="" />
        </div>
        <div className="description-product">
          {showMore && (
            <p>
              Produk {props.nama} dengan harga {props.harga} merupakan produk
              jersey dengan kualitas terbaik
            </p>
          )}
        </div>
        <div className="container-button">
          <button onClick={handleMoreClick}>
            {showMore ? "Sembunyikan" : "Selengkapnya"}
          </button>
          <button onClick={handleLike}>{like ? "Suka" : "Batal Suka"}</button>
        </div>
      </div>
    </>
  );
}

export default Product;
