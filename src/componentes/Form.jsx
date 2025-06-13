import React from 'react';

export default function Form() {

    function handleChange(e) {
        console.log(e.target.value);
    }
    // Submit
    function handleSubmit(e) {
        e.preventDefault()
        alert("Formulaire soumis avec succès !")
    }
    // Supprimer
    function handleReset(e) {
        alert("Le formulaire a été Supprimer !");
    }
    // Afficher la longueur du mot de passe
    function handleSubmit(e) {
        e.preventDefault();
        if (password.length < 6) {
            alert("Erreur !");
            return;
        }
        alert("Formulaire soumis avec succès !");
    }
    // bloque copie d'Email
    function handleCopy(e) {
        e.preventDefault();
        alert("Impossible de copier l'email");
    }
    // Bloque coller d'Email
    function handlePaste(e) {
        e.preventDefault();
        alert("Impossible de coller l'email");
    }

    return (
        <div className="form">
            <form className="p-4 border rounded shadow-sm" onSubmit={handleSubmit} onReset={handleReset}>
                <div className="mb-3">
                    <label htmlFor="nom" className="form-label">Nom :</label>
                    <input id="nom" type="text" className="form-control" onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail :</label>
                    <input id="email" type="email" className="form-control" onChange={handleChange} onCopy={handleCopy} onPaste={handlePaste} />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Mot de passe :</label>
                    <input id="password" type="password" className="form-control" onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message :</label>
                    <textarea id="message" className="form-control" rows="3" onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary">Envoyer</button>
                <button type="reset" className="btn btn-secondary">Supprimer</button>
            </form>
        </div>
    );
}
