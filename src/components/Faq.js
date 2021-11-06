import React from 'react'
import '../App.css'

function Faq() {

    return(
        <>
            <div className="faqContainer">
                <h3 className="h3Faq">Foire Aux Questions</h3>

                <div className="detailsFaqCont">
                    <details className="detailsFaq">
                        <summary className="summaryFaq">Quel est le principe de Mee<span id="T">T</span>onDev ? </summary>
                            <div className="faqAnswer">
                                
                           <p> Un partenariat gagnant-gagnant entre des développeurs en devenir et des associations prêtes à leur confier leur projet.</p>

                            <p>Vous êtes une association désireuse d'avoir une visibilité sur le web ? Chez Mee<span id="T">T</span>onDev nous vous proposons des étudiants prêts à vous proposer un site ou une application fonctionnelle.</p>
                            </div>
                    </details>
                </div>

                <div className="detailsFaqCont">
                    <details className="detailsFaq">
                        <summary className="summaryFaq">Combien ça coûte ? </summary>
                            <div className="faqAnswer">
                            <p>Pour les associations, vous ne payez que l'hébergement de votre site ainsi que son nom de domaine (quelques dizaines d'euros par an)  et une participation forfaitaire pour la maintenance de celui-ci qui sera assurée soit par des professionnels soit par les prochains étudiants (à définir).</p>
                            <p>Pour les étudiants, nous aimerions vous proposer quelque chose de gratuit mais nous pensons que l'investissement financier vous engage à ne pas baisser les bras et à aller au bout des choses, nous vous proposons donc une inscription à 5€ et un engagement à 2€ par site que vous vous engagez à réaliser. Vous récupérer votre investissement lorsque le projet est conforme aux attentes du demandeur. </p>
                            Possibilité de partenariat avec l'école qui financera votre inscription au site.
                            </div>
                    </details>
                </div>
                <div className="detailsFaqCont">
                    <details className="detailsFaq">
                        <summary className="summaryFaq">Quel est le délai de livraison ?</summary>
                            <div className="faqAnswer">
                          <p>  Tout dépend du projet et du nombre d'étudiants qui travailleront dessus. </p>
                          <p>Nous pourrons réaliser une estimation en fonction du projet. Le but n'est pas de surcharger les apprenants, vous pouvez vérifier votre place sur la liste d'attente.</p> 
                          <p>En effet nous essayons de répartir les demandes à travers les écoles en partenariat afin que les temps d'attente soient écourtés le plus possible. </p>
                            </div>
                    </details>
                </div>
                <div className="detailsFaqCont">
                    <details className="detailsFaq">
                        <summary className="summaryFaq">Qui peut s'inscrire ?</summary>
                            <div className="faqAnswer">
                               <p>Tout le monde ! Que vous soyez étudiant en école d'informatique, en formation accélérée (c'est d'ailleurs de le parcours que nous avons choisi !) ou encore autodidacte, Mee<span id="T">T</span>onDev est ouvert à tout le monde.</p>
                               <p>Le seul pré-requis est l'envie d'apprendre ! </p>
                            </div>
                    </details>
                </div>
                <div className="detailsFaqCont">
                    <details className="detailsFaq">
                        <summary className="summaryFaq">Comment savoir si j'ai l'expérience requise ?</summary>
                            <div className="faqAnswer">
                            <p>Peu importe le projet, votre expérience sera toujours utile. Vous avez forcément votre pierre à apporter à l'édifice.</p>
                            <p>Parce qu'après tout, les projets ce n'est pas uniquement que du code ultra complexe, vous pourrez ajouter votre valeur que ce soit depuis le HTML en passant par JavaScript et ses frameworks, créer et entretenir des bases de données SQL ou encore </p>
                            </div>
                    </details>
                </div>
                
               
            
            </div>
        
        
        </>

    )
}

export default Faq;