import React, {useState, useEffect} from 'react'
import '../App.css'
import fork from '../assets/fork.png'
import star from '../assets/star.png'
import gitstars from '../assets/gitstars.png'
import { render } from '@testing-library/react'
import Twitter from './Twitter'




function GithubTrends() {

    const [author, setAuthor] = useState('');
    const [name, setName] = useState('');
    const [stars, setStars] = useState('');
    const [forks, setForks] = useState('');
    const [avatar, setAvatar] = useState('');
    const [language, setLanguage] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.trending-github.com/github/repositories')
            .then(res => res.json())
            .then(data => {
                setData(data[(Math.floor(Math.random() * (25-0+1))+0)]);
            });
    }, []);



    const setData = ({
        author,
        name,
        stars,
        forks,
        language,
        url,
        avatar,
        description
    }) => {
        setAuthor(author.toUpperCase());
        setName(name.toUpperCase());
        setStars(stars);
        setForks(forks);
        setLanguage(language);
        setUrl(url);
        setAvatar(avatar);
        setDescription(description);
    };

    return(
        <div className='card'>
            <div className='cardContainer'>
           

                <div className='cardBody'>
                    <img id='githubAvatar' src={avatar}/>
                    <h3 id="cardName">{name}</h3>
                    <h4 id="cardAuthor">{author}</h4>
                    <p id="cardLanguage">Developped in {language}</p>
                    <h4 id="cardDescription">{description}</h4>
                    
                

                    <div className='cardFooter'>
                        <p id="cardStars"> <img src={gitstars} id='star' alt='star'/>{stars} stars</p>
                        <p id="cardForks"> <img src={fork} id='fork' alt='fork'/>{forks} forks</p>
                        <a href={url} id="cardUrl">{url}</a>
                    </div>

                    <button id='randomBtn' onClick={refresh}> Random project</button>
            
                </div>
    
            </div>
            <Twitter/>

        </div>
    );

    function refresh() {
        document.location.reload(false);
    }
}


export default GithubTrends