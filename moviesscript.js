const addBtn = document.getElementById('addbtn');
const moviesList = document.getElementById('moviesList');
const titleInputBox = document.getElementById('movieTitle');


addBtn.addEventListener('click', function(){
    let movieItem = document.createElement("li");
    let movieTitle = document.createTextNode(titleInputBox.value);
    movieItem.appendChild(movieTitle);
    moviesList.appendChild(movieItem);

    titleInputBox.value = null;
})