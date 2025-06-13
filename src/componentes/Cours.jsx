import ProgressBar from "./ProgressBar";

export default function Cours(props) {
  return (
   <div className="row">
      <div className="col">
        <img src={props.image} class="rounded-circle" alt="cours"/>
        <div className="col card-body">
          <h5 className="card-title">{props.titre}</h5>
          <p className="card-text lead">{props.desc}</p>
          <ProgressBar value={props.progress || 80} />
        </div>
      </div>
      
    </div>
  );
}
