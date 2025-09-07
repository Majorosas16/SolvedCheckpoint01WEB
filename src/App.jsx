import { useState, useEffect } from 'react'
import BookList from './components/ListBooks'
import './App.css'
import ReadBooks from './components/ReadBooks';

function App() {

    const [books, setBooks] = useState([]);
    console.log(books)
    
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');  
    const [added, setAdded] = useState([]);
    console.log(added);

    const handleSearch = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const booksData = await fetch(`https://openlibrary.org/search.json?q=${search}&limit=10`).then((res)=>res.json());
      setBooks(booksData.docs);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
    }

  if(error) return <p>Hay un error: {error}</p>
if (loading) {
  return (
    <div className="loading">
      <img 
        src="https://media.tenor.com/6rspVIGKsQIAAAAj/loading.gif" 
        alt="Cargando..." 
      />
      <p>Cargando...</p>
    </div>
  );
}


  // agregar libro a la lista de leídos
    const handleClick = (book) => {
    setAdded([...added, {...book, status: 'Pendiente', notes: ''}]);
  }

    const handleDelete = (item) => {
    const booksFiltered = added.filter((book) => book !== item);
    setAdded(booksFiltered);
    }
  
  // cambiar el estado del libro en la lista de leídos
  const handleChangeStatus = (item, status) => {
    const listStatusChanged = added.map((book) => book.key === item.key ? {...item, status } : book);
    setAdded(listStatusChanged);
  }

  // cambiar las notas del libro en la lista de leídos
  const handleNotesChange = (book, notes) => {
  const listWithUpdatedNotes = added.map((b) => 
    b.key === book.key ? {...b, notes} : b
  );
  setAdded(listWithUpdatedNotes);
}

  return (
    <div className="app">
      
      <form onSubmit={(e) => handleSearch(e)}>
      <input type='text' 
      placeholder='Buscar libro por nombre' 
      value={search} 
      onChange={(e) => setSearch(e.target.value)}
      />
      <button type='submit'>Buscar</button>      
      </form>

      <BookList books={books} handleClick={handleClick}></BookList>
      <ReadBooks added={added} handleDelete={handleDelete} handleChangeStatus={handleChangeStatus} handleNotesChange={handleNotesChange}></ReadBooks>
    
    </div>
  )
}

export default App
