const book={
    name:"The life of pi",
    prize:100,
    author:"Yann Martel",
    theme:"Adventure",
    publisher:"Random House",
    greet: function(){
        alert("Book Name: " + this.name + "\nAuthor: " + this.author + "\nTheme: " + this.theme);
    }
};
  function showDetails() {
        book.greet();
    }
