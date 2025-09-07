// Componente de la lista de los libros agregados a Libros leidos aquí

import BookItem from "./BooksItem";

const ReadBooks = ({added}) => {

    return(
        <>
            <h1>Libros leidos aquí</h1>
            {added.map((book,i) => 

            <BookItem book={book} key={i} added={added}/>
            )}
        </>
    )
}

export default ReadBooks;