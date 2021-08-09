import React,{useState} from 'react';

const ContactForm = () => {

    //Ici on fixe les hooks pour les inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState ("");
    const [message, setMessage] = useState ("");

    //La fonction permettant de vérifier la structure de l'Email
    const isEmail = () => {
        let mail = document.querySelector('#not-mail');
        let regex = /^[a-zA-z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {
        mail.style.display = 'none';
        return true;
    } else {
        mail.style.display = 'block';
        // On met une animation en cas d'erreur pour avertir l'utilisateur
        mail.style.animation = 'dongle 1s';
        // On réinitialise l'animation pour qu'elle se lance à chaque erreur
        setTimeout (() => {
            mail.style.animation = 'none';
        }, 1000);
        return false;
    }
    };
    // La fonction qui affiche le message d'erreur 
    const failMessage = (message) => {
        let formMess = document.querySelector('.form-message');

        formMess.innerHTML = message;
        formMess.style.opacity = '1';
        formMess.style.background = 'red';

        document.querySelector('#name').classList.add('error');
        document.querySelector('#email').classList.add('error');
        document.querySelector('#message').classList.add('error');
    }
 
    // La fonction envoie le message de dépôt
    const successMessage = () => {
        let formMess = document.querySelector('.form-message');

        formMess.innerHTML = 'Projet déposé ! Nous étudions votre projet dès que possible.';
        formMess.style.opacity = '1';
        formMess.style.background = 'var(--primary-color)';
    }

    // A chaque fois que le formulaire est envoyé ça lance handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault ();

    /* Ici on met des conditions 
    pour vérifier que les champs obligatoires sont remplis
    pourvérifier que l'email est un email (fonction isEmail)
    */
        if (name && isEmail() && message) {
    // La fonction récupère le template et les variables et nous les envoie par mail
        sendFeedback ("template_5zfhsti", {
            name,
            email,
            message,
        });
    } else {

        failMessage ("Il manque des informations obligatoires*.");
    }
    };

    const sendFeedback = (templateId, variables) => {
        window.emailjs
            .send ("service_zdvv0qo", templateId, variables)
            .then ((res) => {
                successMessage();
        // Une fois les données envoyées par mail on remet les useStates à 0
                setName("");
                setEmail("");
                setMessage("");
            })
        // Si erreur alors on affiche un message sur la page
            .catch (
                (err) => {
                    failMessage("Oups, il y a un problème, réessayez s'ils-vous-plaît.");
                }
            );
    }
               

    //Ici on code le formulaire de dépot de projet
    return (
        <form className="contact-form">
            <h2>Déposez votre projet</h2>
            <div className="form-content">
                <input 
                    type="text"
                    id="name"
                    name="name"
                    //On récupère ce qui est tapé par l'utilisateur dans la variable
                    onChange={(e) => setName (e.target.value)} 
                    placeholder="nom*"
                    value={name}
                    autoCapitalizeomplete="off"
                    />
                <div className="email-content">
                    <label id="not-mail">Email non valide </label>
                    <input 
                        type="text"
                        id="email"
                        name="email"
                        //On récupère ce qui est tapé par l'utilisateur dans la variable
                        onChange={(e) => setEmail (e.target.value)} 
                        placeholder="email*"
                        value={email}
                        autoCapitalizeomplete="off"
                    />
                </div>

                <textarea 
                    id="message"
                    name="message"
                    //On récupère ce qui est tapé par l'utilisateur dans la variable
                    onChange={(e) => setMessage (e.target.value)} 
                    placeholder="Brève description de votre projet*"
                    value={message}
                    autoCapitalizeomplete="off"
                    />
            </div>
            <input
                className="button"
                type="button"
                value="Déposer le projet"
                //Lancement de la fonction au clic sur le bouton
                onClick={handleSubmit}
            />

            <div className="form-message"></div>

        
        </form>
    );
}

export default ContactForm;