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
    
    const [lectureState, setLectureState] = useState([]);

 const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(search.toLowerCase()));  

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
  if(loading) return <p>Cargando.....</p>

  // Agregar libro a la lista de Libros leidos aquí
      const handleClick = (item) => {
      const booksAdded = [...added, item]; 
      setAdded(booksAdded);
    }

      const lectureStateClick = (item) => {
      const lectureStateC = [...lectureState, item]; 
      setLectureState(lectureStateC);
    }

  return (
    <>
      
      <form onSubmit={(e) => handleSearch(e)}>
      <input type='text' 
      placeholder='Buscar libro por nombre' 
      value={search} 
      onChange={(e) => setSearch(e.target.value)}
      />
      <button type='submit'>Buscar</button>      
      </form>

      <BookList books={books} handleClick={handleClick} lectureState={lectureStateClick}></BookList>
      <ReadBooks added={added}></ReadBooks>
    
    </>
  )
}

export default App
