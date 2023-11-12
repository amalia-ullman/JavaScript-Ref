const addBtn = document.getElementById('addbtn');
const removeBtn = document.getElementById('removebtn');
const moviesList = document.getElementById('moviesList');
const titleInputBox = document.getElementById('movieTitle');


function removeAll(){
    let allMovies = moviesList.children;

    while(allMovies.length > 0){
        allMovies.item(0).remove();
    }

}

addBtn.addEventListener('click', function(){
    let movieItem = document.createElement("li");
    let movieTitle = document.createTextNode(titleInputBox.value);
    movieItem.appendChild(movieTitle);
    moviesList.appendChild(movieItem);

    titleInputBox.value = null;
})
removeBtn.addEventListener('click', removeAll)