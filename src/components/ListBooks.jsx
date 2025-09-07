// Componente de la lista de los libros renderizados de la búsqueda

import BookItem from "./BooksItem";

const BookList = ({books, handleClick, lectureState}) => {

    return(
        <>
            <h1>Libros guardados</h1>
            {books.map((book,i) => 
            <BookItem book={book} key={i} handleClick={handleClick} lectureState={lectureState}/>)}
        </>
    )
}

export default BookList;