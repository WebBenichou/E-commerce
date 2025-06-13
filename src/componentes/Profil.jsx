 function Profil(props) {
  
  return (
    <div className="col-12 col-md-4 mb-4">
      <div className="card h-100">
        <img
          src={props.photo}
          className="card-img-top"
          alt={`Photo de ${props.nom}`}
        />
        <div className="card-header">
          <h5>{props.nom}</h5>
        </div>
        <div className="card-body">
          <p className="lead">Âge : {props.age}</p>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <button className="btn btn-warning">Voir détails</button>
          <button className="btn btn-secondary">Annuler</button>
        </div>
      </div>
    </div>
  );
}


export default Profil