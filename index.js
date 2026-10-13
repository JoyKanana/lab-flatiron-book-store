const bookStore = {
    name: "Flatbooks Technical Books",
    books: [
        {
            title: "Eloquent JavaScript: A Modern Introduction to Programming",
            author: "Marijn Haverbeke",
            image: "https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
        },
        {
            title: "JavaScript and JQuery: Interactive Front-End Web Development",
            author: "Jon Duckett",
            image: "https://images-na.ssl-images-amazon.com/images/I/41D9dIgqkAL._SX379_BO1,204,203,200_.jpg",
        },
        {
            title: "Cracking the Coding Interview",
            author: "Gayle Laakmann McDowell",
            image: "https://images-na.ssl-images-amazon.com/images/I/41r1ZrS0UQL._SX377_BO1,204,203,200_.jpg",
        },
    ],
};
//update the title of the bookstore in the header
const bookStoreTitle = document.getElementById("header");
bookStoreTitle.textContent = bookStore.name;

//create a new element for each book in the bookstore and append it to the book list
const bookList = document.getElementById("book-list");
for (const book of bookStore.books) {
    const bookItem = document.createElement("li");

    const bookTitle = document.createElement("h3");
    bookTitle.textContent = book.title;

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = book.author;

    const bookImage = document.createElement("img");
    bookImage.src = book.image;

    bookItem.appendChild(bookTitle);
    bookItem.appendChild(bookAuthor);
    bookItem.appendChild(bookImage);
    bookList.appendChild(bookItem);
}
document.getElementById("delete-this").remove();