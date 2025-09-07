// Componente de la lista de los libros agregados a Libros leidos aquí

import BookItem from "./BooksItem";
import './ReadBooks.css';

const ReadBooks = ({added, handleChangeStatus, handleDelete, handleNotesChange}) => {
    return(
        <div className="read-books">
            <h1>Mi Biblioteca Personal</h1>
            <div className="read-books-container">
                {added.map((book,i) => 
                    <BookItem 
                        book={book} 
                        key={i} 
                        added={true}
                        handleChangeStatus={handleChangeStatus}
                        handleDelete={handleDelete}
                        handleNotesChange={handleNotesChange}
                    />
                )}
            </div>
        </div>
    )
}

export default ReadBooks;