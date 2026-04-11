import { useState } from "react";

const Bookshelf = () => {

  const [books, setBooks] = useState([
    { id: crypto.randomUUID(), title: "Fourth Wing", author: "Rebecca Yarros" },
    { id: crypto.randomUUID(), title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);

  const [newBook, setNewBook] = useState({ id: crypto.randomUUID(), title: "", author: "" });

  const handleInputChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({ id: crypto.randomUUID(), title: "", author: "" });
  }
  return (
  <>
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit = {handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input 
          onChange={handleInputChange}
          type= "text"
          id= "title"
          name= "title"
          value= {newBook.title}
          />

          <label htmlFor="author">Author:</label>
          <input 
          onChange={handleInputChange}
          type= "text"
          id= "author"
          name= "author"
          value= {newBook.author}
          />

          <button type="submit">Add Book!</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key = {book.id} className="bookCard">
            <h4>{book.title}</h4>
            <p>{book.author}</p>
          </div>
        ))}</div>
    </div>
  </>
   );
};

export default Bookshelf;