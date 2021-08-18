import React from 'react'
import '../App.css'

function Faq() {

    return(
        <>
            <div className="faqContainer">
                <h3 className="h3Faq">Foire Aux Questions</h3>

                <div className="detailsFaqCont">
                    <details className="detailsFaq">
                        <summary className="summaryFaq">Question 1</summary>
                            <div className="faqAnswer">
                                La réponse à la question 1 sur une ligne
                            </div>
                    </details>
                </div>
                <div className="detailsFaqCont">
                    <details className="detailsFaq">
                        <summary className="summaryFaq">Question 2</summary>
                            <div className="faqAnswer">
                                La réponse à la question 2<br></br>
                                sur 2 lignes
                            </div>
                    </details>
                </div>
                <div className="detailsFaqCont">
                    <details className="detailsFaq">
                        <summary className="summaryFaq">Question 3</summary>
                            <div className="faqAnswer">
                                <p>La réponse à la question 3</p>
                                <p>en 2 paragraphes</p>
                            </div>
                    </details>
                </div>
                <div className="detailsFaqCont">
                    <details className="detailsFaq">
                        <summary className="summaryFaq">Question 4</summary>
                            <div className="faqAnswer">
                                Non, c'est bon vous avez compris
                            </div>
                    </details>
                </div>
                <div className="detailsFaqCont">
                    <details className="detailsFaq">
                        <summary className="summaryFaq">Question 5</summary>
                            <div className="faqAnswer">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </div>
                    </details>
                </div>
                <div className="detailsFaqCont">
                    <details className="detailsFaq">
                        <summary className="summaryFaq">Question 6</summary>
                            <div className="faqAnswer">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. <br></br>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </div>
                    </details>
                </div>
                <div className="detailsFaqCont">
                    <details className="detailsFaq">
                        <summary className="summaryFaq">Question 7</summary>
                            <div className="faqAnswer">
                            <p className="pFaq"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
            </p>
            <p className="pFaq"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
            </p>
                            </div>
                    </details>
                </div>
            
            </div>
        
        
        </>

    )
}

export default Faq