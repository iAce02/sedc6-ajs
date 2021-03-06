document.addEventListener("DOMContentLoaded", () => {
    processResponse(fetch("api/books"));

    document.getElementById("author").addEventListener("click", () =>{
        processResponse(fetch("api/books?sortby=author"))
    });

    document.getElementById("title").addEventListener("click", () =>{
        processResponse(fetch("api/books?sortby=title"))
    });

    document.getElementById("search").addEventListener("click", () =>{
        const searchTerm = document.getElementById("searchTerm").value;
        processResponse(fetch(`api/books?filter=${searchTerm}`));
    });

});

function processResponse(response) {
    let table = document.getElementById("books");
    let total = document.getElementById("total");

    response.then(data => data.json())
        .then(value => {
            let oldRows = document.getElementsByClassName("row");
            for (let index = oldRows.length-1; index >= 0; index--) {
                const row = oldRows[index];
                table.removeChild(row);
            }
            for (let index = 0; index < value.books.length; index++) {
                const book = value.books[index];
                const tr = document.createElement("tr");
                let td = document.createElement("td");
                td.innerHTML = book.author;
                tr.appendChild(td);
                td = document.createElement("td");
                td.innerHTML = book.title;
                tr.appendChild(td);
                tr.classList.add("row");
                table.appendChild(tr);
            }
            total.innerHTML = value.total;
        });
}