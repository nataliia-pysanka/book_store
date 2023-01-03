// "id" - унікальний ідентифікатор (тип - число)
// - "author" - автор книги (тип - рядок)
// - "price" - ціна книги (тип - число)
// - "image" - посилання на зображення книги (тип - рядок)
// - "title" - назва книги (тип - рядок)
// - "shortDescription" - короткий опис вмісту книги (тип - рядок)

// - "description" - розгорнутий опис вмісту книги (тип - рядок)


let url = '../static/books.json';

async function getBooks() {
  let response = await fetch(url);
  let data = await response.json();

  for (book of data.books) {
    createBook(book);
}
}
let n =0;
function createBook(book) {
  let li = document.createElement('li');
  li.classList.add('item');
  ul.append(li);
  
  let article = document.createElement('article');
  article.classList.add('card');
  li.append(article);

  let card_thumb = document.createElement('div');
  card_thumb.classList.add('card-thumb');
  article.append(card_thumb);

  let img_link = document.createElement('a');
  img_link.href = "../specific-book/index.html";
  card_thumb.append(img_link);

  let img = document.createElement('img');
  img.src = book['image'];
  img.alt = "";
  img_link.append(img);

  let card_content = document.createElement('div');
  card_content.classList.add('card-content');
  article.append(card_content);
  
  let title = document.createElement('h2');
  title.classList.add('card-head');
  card_content.append(title);
  title.textContent = truncate(book['title'], +title.offsetWidth / 8);

  let author = document.createElement('p');
  card_content.append(author);
  author.textContent = truncate(book['author'], +title.offsetWidth / 8);
  

  let price = document.createElement('p');
  card_content.append(price);
  price.textContent = '$' + book['price'];
  

  let btn = document.createElement('a');
  btn.classList.add("btn", "btn-gray");
  btn.href = "../specific-book/index.html";
  btn.textContent = "Переглянути";
  card_content.append(btn);

}

function truncate(string, len) {
  for (let i = 1; i < string.length; i++){
    if (string.slice(0, i + 3).length > len){
      return string.slice(0, i) + '...';
    }
  }
  return string;
}

let ul = document.getElementById('book_list');

getBooks();

