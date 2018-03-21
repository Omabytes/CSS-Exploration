const books = document.querySelectorAll(".books")

function expand(e) {
    console.log(this)
    if(this.classList.contains(".expanded")) return
    this.classList.add(".expanded")
}

books.forEach(book => book.addEventListener("click", expand))