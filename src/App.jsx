import Cours from "./componentes/Cours"
import Form from "./componentes/Form"
import Profil from "./componentes/profil"
import ProgressBar from "./componentes/ProgressBar"

function App() {
  return (
    <div className="container">
      <h1 className="text-center">Profils Utilisatures </h1>
      <div className="row">
        <Profil nom="Alice" age={25} photo="/images/img1.jpg" />
        <Profil nom="Bob" age={30} photo="/images/img2.jpg" />
        <Profil nom="Charlie" age={22} photo="/images/img3.jpg" />
      </div>

      <div className="container">
        <h1 className="text-center mb-4">Bienvenue</h1>
        <div className="row">
          <div className="col-4">
            <Cours
            image="/images/js.png"
              titre="Introduction au JavaScript"
              desc="Commencez le développement web en apprenant les bases du JavaScript."
              value={40}
            />
          </div>
          <div className="col-4">
            <Cours
            image="/images/React.png"
              titre="React Fundamentals"
              desc="Maitrisez les concepts clés de React."
              value={80}
            />
          </div>
          <div className="col-4">
            <Cours
            image="/images/Node.png"
              titre=" Node.js & Express"
              desc=" Développement backend avec Node.js."
              value={50}
            />
          </div>
        </div>
      </div>
<hr />
      <div>
        <h1 className="text-center">Fourmulaire</h1>
        <Form />
      </div>
    </div>


  )


}

export default App