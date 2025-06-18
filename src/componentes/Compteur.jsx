// Compteur.jsx
import { useState } from "react";

export default function Compteur(props) {
    const [compteur, setCompteur] = useState(0);
    const [name, setName] = useState("Amine");

    function addToPanier() {
        setCompteur(compteur + 1);
    }

    return (
        <div className="container mt-4">
            <h1>Welcome, {name}</h1>
            <div className="card" style={{ width: "18rem" }}>
                <img
                    src={props.imgProduit}
                    className="card-img-top"
                    alt="Produit"
                />
                <div className="card-body">
                    <h5 className="card-title">Produit Exemple</h5>
                    <p className="card-text">
                        Ceci est une description du produit. C'est un excellent choix !
                    </p>
                    <button onClick={addToPanier} className="btn btn-success">
                        Ajouter au panier
                    </button>
                </div>
            </div>
            
        </div>
    );
}
