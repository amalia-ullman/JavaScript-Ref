async function populate(){
    const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

    const request = new Request(requestURL);

    const response = await fetch(request);

    const superheroes = await response.json();
    populateHeader(superheroes);
    populateHeroes(superheroes);
}



function populateHeader(obj){
    const header = document.querySelector('header');

    const h1 = document.createElement('h1');
    h1.textContent = obj.squadName;
    header.appendChild(h1);

    const paragraph = document.createElement('p');
    paragraph.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
    header.appendChild(paragraph);
}

function populateHeroes(obj){
    const section = document.querySelector('section');
    const heroes = obj.members;
    console.log(heroes);

    for (const hero of heroes){
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        const ul = document.createElement('ul');

        h2.textContent = hero.name;
        p1.textContent = `Secret Identity: ${hero.secretIdentity}`;
        p2.textContent = `Age: ${hero.age}`;
        p3.textContent = "Superpowers: ";
        for (const power of hero.powers){
            const li = document.createElement('li');
            li.textContent = power;
            ul.appendChild(li);
        }
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        article.appendChild(ul);
        section.appendChild(article);
    }

}

populate();
