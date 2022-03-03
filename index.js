const url = 'https://anapioficeandfire.com/api/books'

// fetch("http://api.open-notify.org/astros.json")
//   .then(function (response) {
//     console.log(response);
//     return response.json();
//   })

function fetchBooks() {
  return fetch(url)
  .then((resp) => resp.json())
  .then((json) => renderBooks(json));
}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
