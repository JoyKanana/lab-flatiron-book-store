const bookStore = {
    name: "Flatbooks",
    books: [
        {
            title: "That's Not My Name",
            author: "Megan Lally",
            image: "https://i.pinimg.com/1200x/ea/89/1c/ea891c79908c5d5716fd4e8062667c02.jpg",
        },
        {
            title: "The Silent Patient",
            author: "Alex Michaelides",
            image: "https://i.pinimg.com/736x/d1/a3/a6/d1a3a60620bb77ee46e4d5140d09d550.jpg",
        },
        {
            title: "Not Quite Dead Yet",
            author: "Holly Jackson",
            image: "https://i.pinimg.com/736x/40/d1/88/40d188adb453903f83af05c5e64a61fe.jpg",
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