

function Galaxy({ key, id, name, diameter }) {
  return (
    <div className="card">
      <h3>
        ({id}). {name}
      </h3>
      <div>Diameter : {diameter.toLocaleString()}</div>
    </div>
  );
}

export default Galaxy;
