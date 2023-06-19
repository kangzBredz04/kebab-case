import { useState } from "react";
import { BsFillPlusCircleFill, BsFillTrash3Fill } from "react-icons/bs";
import { MdZoomOutMap, MdZoomInMap } from "react-icons/md";
import Galaxy from "./components/Galaxy";
import "./index.css";

function App() {
  const [galaxies, setGalaxies] = useState([
    {
      id: 1,
      name: "Andromeda",
      diameter: 220000,
    },
    {
      id: 2,
      name: "Bima Sakti",
      diameter: 100000,
    },
    {
      id: 3,
      name: "Triangulum",
      diameter: 60000,
    },
  ]);

  const [tampGalaxie, setTampNewGalaxie] = useState({
    id: galaxies.length + 1,
    name: "",
    diameter: 0,
  });
  function handleChangeTambah(e) {
    setTampNewGalaxie({ ...tampGalaxie, [e.target.name]: e.target.value });
  }

  const [idEdit, setIdEdit] = useState(0);
  const [nameEdit, setNameEdit] = useState("");

  return (
    <>
      <main>
        <div className="container">
          {galaxies.map((galaxie) => (
            <Galaxy
              key={galaxie.id}
              id={galaxie.id}
              name={galaxie.name}
              diameter={galaxie.diameter}
            />
          ))}
        </div>
        <form className="card">
          <h1>Tambah</h1>
          <label>
            ID :
            <input
              name="id"
              type="number"
              readOnly
              onChange={handleChangeTambah}
              value={tampGalaxie.id}
            />
          </label>
          <label>
            Nama :
            <input
              name="name"
              type="text"
              onChange={handleChangeTambah}
              value={tampGalaxie.name}
            />
          </label>
          <label>
            Diameter :
            <input
              name="diameter"
              type="number"
              onChange={handleChangeTambah}
              value={tampGalaxie.diameter}
            />
          </label>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                const tampParse = {
                  id: parseInt(tampGalaxie.id),
                  name: tampGalaxie.name,
                  diameter: parseInt(tampGalaxie.diameter),
                };
                setGalaxies([tampParse, ...galaxies]);
                setTampNewGalaxie({
                  id: tampGalaxie.id + 1,
                  name: "",
                  diameter: "",
                });
              }}
            >
              <BsFillPlusCircleFill />
              Depan
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                const tampParse = {
                  id: parseInt(tampGalaxie.id),
                  name: tampGalaxie.name,
                  diameter: parseInt(tampGalaxie.diameter),
                };
                setGalaxies([...galaxies, tampParse]);
                setTampNewGalaxie({
                  id: tampGalaxie.id + 1,
                  name: "",
                  diameter: "",
                });
              }}
            >
              <BsFillPlusCircleFill />
              Belakang
            </button>
          </div>
        </form>
        <form className="card">
          <h3>Edit/Hapus Berdasarkan ID</h3>
          <label>
            ID :
            <input
              value={idEdit}
              type="number"
              onChange={(e) => {
                e.preventDefault();
                setIdEdit(parseInt(e.target.value));
              }}
            />
          </label>
          <label>
            Nama :
            <input
              type="text"
              value={nameEdit}
              onChange={(e) => setNameEdit(e.target.value)}
            />
          </label>
          <section>
            <div className="buttons">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setGalaxies(
                    galaxies.map((g) =>
                      g.id === idEdit
                        ? { ...g, diameter: g.diameter + 10000 }
                        : g
                    )
                  );
                }}
              >
                <MdZoomOutMap />
                Perbesar
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setGalaxies(
                    galaxies.map((g) =>
                      g.id === idEdit
                        ? { ...g, diameter: g.diameter - 10000 }
                        : g
                    )
                  );
                }}
              >
                <MdZoomInMap />
                Perkecil
              </button>
            </div>
            <div className="buttons">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setGalaxies(galaxies.filter((g) => g.id !== idEdit));
                }}
              >
                <BsFillTrash3Fill />
                Hapus
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setGalaxies(
                    galaxies.map((g) =>
                      g.id === idEdit ? { ...g, name: nameEdit } : g
                    )
                  );
                }}
              >
                <BsFillPlusCircleFill />
                Edit
              </button>
            </div>
          </section>
        </form>
        <form className="card">
          <h1>Hapus</h1>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                setGalaxies(galaxies.slice(1));
              }}
            >
              <BsFillTrash3Fill />
              Depan
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setGalaxies(galaxies.slice(0, -1));
              }}
            >
              <BsFillTrash3Fill />
              Belakang
            </button>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setGalaxies([]);
            }}
          >
            <BsFillTrash3Fill />
            Semua
          </button>
        </form>
      </main>
    </>
  );
}

export default App;
