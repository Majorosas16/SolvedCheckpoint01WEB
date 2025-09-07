// Componente de cada libro renderizado tanto en la búsqueda como en la lista de leídos
import './BooksItem.css';

const BookItem = ({ book, handleClick, added, handleChangeStatus, handleDelete, handleNotesChange }) => {
    return (
        <div className="book-item" data-status={book.status}>
            <h3>{book.title}</h3>      
            <p><strong>Autor:</strong> {book.author_name || 'Desconocido'}</p>
            <p><strong>Año:</strong> {book.first_publish_year || 'No disponible'}</p>
            
            {!added && (
                <button onClick={() => handleClick(book)}>Agregar a Mi Biblioteca</button>
            )}

            {added && (
                <>
                    <div className="controls-container">
                        <select 
                            value={book.status ?? 'Pendiente'} 
                            onChange={(e) => handleChangeStatus(book, e.target.value)}
                        >
                            <option value="Pendiente">Pendiente</option>
                            <option value="Leyendo">Leyendo</option>
                            <option value="Terminado">Terminado</option>
                        </select>
                        <button onClick={() => handleDelete(book)}>Eliminar</button>
                    </div>

                    <textarea 
                        value={book.notes || ''}
                        onChange={(e) => handleNotesChange(book, e.target.value)}
                        rows="5" 
                        placeholder="Escribe aquí tus notas personales..."
                    />
                    
                    {book.notes && (
                        <div className="notes-preview">
                            <p><strong>Tus notas:</strong> {book.notes}</p>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

    
export default BookItem;

