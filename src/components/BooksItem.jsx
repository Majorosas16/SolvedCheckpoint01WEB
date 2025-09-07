// Componente de cada libro renderizado tanto en la búsqueda como en la lista de leídos

const BookItem = ({ book, handleClick, added }) => {

    return (
    <>
        <h3> {book.title}</h3>      
        <p> Author: {book.author_name}</p>
        <p> Year {book.first_publish_year || 'noYear'}</p>
        
        {/* Solo se muestra si no existe read */}
        {!added && (
            <button onClick={() => handleClick(book)}>Agregar a Lista</button>
        )}

        {/* solo se muestran si existe read*/}
        {added && (
            <>
                <select name="addedBooks" id="addedSelect">
                    <option value="hold">Pendiente</option>
                    <option value="read">Leyendo</option>
                    <option value="finish">Terminado</option>
                </select>
                
                <input 
                    type="text" 
                    placeholder="Notas personales"
                />
            </>
        )}
    </>
    )
}

export default BookItem;

