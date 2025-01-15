//Trying to define fetchbooks but keep having a brain fart.
//how do i define fetchbooks? Am I in the right location...
// // const fetchBooks = document.querySelector('#books')

// const fetchBooks = async () => {
//   try {
//     const response = await fetch('https://anapioficeandfire.com/api/books')
//     if (!response.ok){
//       throw new Error('error')
//     }
//     const data = await response.json() 
//     renderBooks(data) //why dont i work? wrong location?
//     return data
//   } catch (error){
//     alert (error)
//   }
//   // renderBooks(data) //Do i go here instead? Neither worked
//   // To pass the tests, don't forget to return your fetch! 
// }

const fetchBooks = () => {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then(data => renderBooks(data))
  .catch (error => alert(error)) 
}


//functions were provided below
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
