let quote = document.getElementById("qouteOutput");
let author = document.getElementById("authorOutput");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

let getQuote = () => {
    fetch(url)
    .then((data) => data.json())
    .then((item) => {
        quoteOutput.innerText = item.content;
        authorOutput.innerText = item.author;
    });
};
window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);