async function fetchJSON(){
    const request = new Request("../data.json");
    const response = await fetch(request);
    const data = await response.json();

    return data;
}

function populateTable(data){
    const tableBody = document.getElementById('packages-table').getElementsByTagName('tbody')[0];

    data.packages.forEach(package => {
        const row = tableBody.insertRow();
        const id = row.insertCell(0);
        const name = row.insertCell(1);
        const year = row.insertCell(2);
        const author = row.insertCell(3);
        const site = row.insertCell(4);

        id.textContent = package.id;
        name.textContent = package.name;
        year.textContent = package.year;
        author.textContent = package.author;

        const url = document.createElement('a');
        url.href = package.URL;
        url.target = "_blank";
        url.textContent = package.URL;
        site.appendChild(url);


        console.log(package.name);
    });
}

fetchJSON().then(populateTable);