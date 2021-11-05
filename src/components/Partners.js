import React from 'react'
import '../App.css'

export default function Partners() {
    return (
        <div className="partnerContainer">
            <div className='partnerBody'>
                    <h2 id='partnerTitle'>Ils nous font confiance : </h2>

                    <div className='partnerMain'>

                        <div className='partnerInfo'>
                            <a href='https://www.wildcodeschool.com' target='_blank' rel='noreferrer'>
                            <div className="partnerlogo">
                            <img id='WCS' src="https://avatars.githubusercontent.com/u/8874047?s=280&v=4" alt='Wild Code School logo' />
                            </div>
                            <h3>Wild Code School</h3>
                            </a>

                        </div>

                        <div className='partnerInfo'>
                            <a href='https://www.github.com' target='_blank' rel='noreferrer'>
                                <div className="partnerlogo">
                                <img id='git' src='https://github.githubassets.com/images/modules/logos_page/Octocat.png' alt='git' />
                                </div>
                            <h3>GithubTrends</h3>
                            </a>
                        </div>

                        <div className='partnerInfo'>
                            <a href='https://www.google.fr' target='_blank' rel='noreferrer'>
                                <div className="partnerlogo">
                                <img id='google' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt='Google Logo'/>
                                </div>
                            <h3>Google</h3> 
                            </a>
                        </div>

                
                    
                    </div>
                
            </div>
        </div>
    )
}
