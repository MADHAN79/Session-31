import React, { useState } from 'react';
import DashboardLayout from './components/Layout/DashboardLayout';
import AddBookForm from './components/Books/AddBookForm';
import EditBookForm from './components/Books/EditBookForm';
import BookTable from './components/Books/BookTable';
import AddAuthorForm from './components/Authors/AddAuthorForm';
import EditAuthorForm from './components/Authors/EditAuthorForm';
import AuthorTable from './components/Authors/AuthorTable';

const App = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [editingAuthor, setEditingAuthor] = useState(null);

  const addBook = (book) => setBooks([...books, book]);

  const updateBook = (updatedBook) => {
    setBooks(books.map((b) => (b.isbn === updatedBook.isbn ? updatedBook : b)));
    setEditingBook(null); // Reset the form after updating
  };

  const deleteBook = (isbn) => setBooks(books.filter((b) => b.isbn !== isbn));

  const addAuthor = (author) => setAuthors([...authors, author]);

  const updateAuthor = (updatedAuthor) => {
    setAuthors(authors.map((a) => (a.name === updatedAuthor.name ? updatedAuthor : a)));
    setEditingAuthor(null); // Reset the form after updating
  };

  const deleteAuthor = (name) => setAuthors(authors.filter((a) => a.name !== name));

  return (
    <DashboardLayout>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-container">
            <h3 className="text-xl font-bold">Add Book</h3>
            {!editingBook && <AddBookForm addBook={addBook} />}
            {editingBook && <EditBookForm book={editingBook} updateBook={updateBook} />}
          </div>
          <div className="table-container">
            <h3 className="text-xl font-bold">Books</h3>
            <BookTable books={books} onEdit={setEditingBook} onDelete={deleteBook} />
          </div>
          <div className="form-container">
            <h3 className="text-xl font-bold">Add Author</h3>
            {!editingAuthor && <AddAuthorForm addAuthor={addAuthor} />}
            {editingAuthor && <EditAuthorForm author={editingAuthor} updateAuthor={updateAuthor} />}
          </div>
          <div className="table-container">
            <h3 className="text-xl font-bold">Authors</h3>
            <AuthorTable authors={authors} onEdit={setEditingAuthor} onDelete={deleteAuthor} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default App;
