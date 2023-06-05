import "./Content.css";
import CardProduct from "./CardProduct";
import { listDataJersey } from "./ListDataJersey";

function Content() {
  const products = listDataJersey;

  const handleClick = (nama, harga) => {
    alert("Produk " + nama + " dengan harga " + harga + " merupakan produk jersey dengan kualitas terbaik")
  }
  return (
    <>
      <div className="container-content">
        {products.map((l, i) => (
          <div onClick={() => handleClick(l.namaProduk, l.hargaProduk)}>
            <CardProduct
              key={i}
              nama={l.namaProduk}
              harga={l.hargaProduk}
              alamat={l.urlGambar}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Content;
