const searchInput = document.querySelector('#search');
const results = document.querySelector('#results');

let repositories;
let searchTerm = ""; // Ici l'input

//Ici j'envoie une requête sur l'API pour récupérer le Json des repos

    const fetchRepositories = async () => {
    repositories = await fetch (
        'https://api.trending-github.com/github/repositories')
        .then(res => res.json());
};

const showRepositories = async() => {
    await fetchRepositories();

    results.innerHTML = (

        /* Ici on filtre sur la description 
            on utilise la méthode includes pour chercher les correspondances
            on ramène la description et les termes de recherche en minuscule pour la casse*/ 
        repositories 
            .filter(repository => repository.description.toLowerCase()
            .includes(searchTerm.toLowerCase()
            ))
            // Ici on crée un nouvel objet avec les résultats
            .map(repository => (

                //Ici j'injecte le HTML avec ma structure de résultat
                `
                {<li class="repository-item>
                <h3 class="repository-name">${repository.name}</h3>
                <h4 class="repository-author">${repository.author}</h4>
                <p class="repository-description">${repository.description}</p>
                <img class="repository-avatar" src="${repository.avatar}" />
                <span class="repository-stars">${repository.stars}</span>
                <span class="repository-forks">${repository.forks}</span>
                <span class="repository-language">${repository.language}</span>
                <a href=${repository.url}>Voir le projet</a> 
                </li>}

                `

            )).join('') //Ici join vire les virgules de map
    );
};

showRepositories ();

//Ici on récupère la requête dans l'input et on l'affecte à searchTerm

    searchInput.addEventListener('input', (e) => {searchTerm = e.target.value; 
    showRepositories();
});
