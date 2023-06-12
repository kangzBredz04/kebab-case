import "./index.css";
import J1 from "./assets/Jersey 1.jpeg";
import J2 from "./assets/Jersey 2.jpeg";
import J3 from "./assets/Jersey 3.jpeg";
import J4 from "./assets/Jersey 4.jpeg";
import J5 from "./assets/Jersey 5.jpeg";
import J6 from "./assets/Jersey 6.jpeg";
import J7 from "./assets/Jersey 7.jpeg";
import Product from "./components/Product";

function App() {
  const jerseys = [
    {
      id: 1,
      namaProduk: "Black and Gold",
      hargaProduk: "Rp. 350.000",
      ukuranJersey: "XL",
      urlGambar: J1,
    },
    {
      id: 2,
      namaProduk: "White and Blue",
      hargaProduk: "Rp. 300.000",
      ukuranJersey: "L",
      urlGambar: J2,
    },
    {
      id: 3,
      namaProduk: "Gradation Blue and Black",
      hargaProduk: "Rp. 400.000",
      ukuranJersey: "XL",
      urlGambar: J3,
    },
    {
      id: 4,
      namaProduk: "Navy and Blue",
      hargaProduk: "Rp. 250.000",
      ukuranJersey: "M",
      urlGambar: J4,
    },
    {
      id: 5,
      namaProduk: "Black and White",
      hargaProduk: "Rp. 550.000",
      ukuranJersey: "XL",
      urlGambar: J5,
    },
    {
      id: 6,
      namaProduk: "Red and Black",
      hargaProduk: "Rp. 500.000",
      ukuranJersey: "XL",
      urlGambar: J6,
    },
    {
      id: 7,
      namaProduk: "Yellow and Black",
      hargaProduk: "Rp. 150.000",
      ukuranJersey: "M",
      urlGambar: J7,
    },
    {
      id: 8,
      namaProduk: "Black and Gold",
      hargaProduk: "Rp. 350.000",
      ukuranJersey: "XL",
      urlGambar: J1,
    },
    {
      id: 9,
      namaProduk: "White and Blue",
      hargaProduk: "Rp. 300.000",
      ukuranJersey: "L",
      urlGambar: J2,
    },
    {
      id: 10,
      namaProduk: "Gradation Blue and Black",
      hargaProduk: "Rp. 400.000",
      ukuranJersey: "XL",
      urlGambar: J3,
    },
  ];

  return (
    <>
      <div className="container-content">
        {jerseys.map((l, i) => (
          <Product
            key={i}
            nama={l.namaProduk}
            harga={l.hargaProduk}
            alamat={l.urlGambar}
          />
        ))}
      </div>
    </>
  );
}

export default App;
