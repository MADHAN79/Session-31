// src/components/Books/BookTable.jsx
import React from 'react';

const BookTable = ({ books, onEdit, onDelete }) => {
  return (
    <table className="table-auto w-full mt-4">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th>Publication Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.isbn}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.isbn}</td>
            <td>{book.publicationDate}</td>
            <td>
              <button onClick={() => onEdit(book)} className="btn">Edit</button>
              <button onClick={() => onDelete(book.isbn)} className="btn ml-2">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;
