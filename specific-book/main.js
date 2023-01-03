let price = document.getElementById("book_price");
let count = document.getElementById("book_count");
let total = document.getElementById("book_total");

count.addEventListener('keyup', totalChanger); 
count.addEventListener('keydown', totalChanger); 
count.addEventListener('click', totalChanger);

function totalChanger() {
  count.value = replaceSymbols(count.value);

  if (+count.value < 0) {
    count.value = 0;
  }
  else if (+count.value > 42) {
    count.value = 42;
  }
  total.textContent = +price.textContent * +count.value;
}
let n = 0;
function replaceSymbols(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
}
