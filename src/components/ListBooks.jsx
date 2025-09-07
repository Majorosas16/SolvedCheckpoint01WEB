// Componente de la lista de los libros renderizados de la búsqueda

import BookItem from "./BooksItem";
import './BooksList.css';

const BookList = ({books, handleClick}) => {
    return(
        <div className="book-list">
            <h1>Libros encontrados</h1>
            <div className="books-container">
                {books.map((book,i) => 
                    <BookItem
                        book={book}
                        key={i}
                        handleClick={handleClick}
                    />)}
            </div>
        </div>
    )
}

export default BookList;