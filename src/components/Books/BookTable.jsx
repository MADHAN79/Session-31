// src/components/Books/BookTable.jsx
import React from 'react';

const BookTable = ({ books, onEdit, onDelete }) => {
  return (
    <table className="booktable  table-auto w-full mt-4">
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
          <tr key={book.id}> {/* Use id as key */}
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.isbn}</td>
            <td>{book.publicationDate}</td>
            <td>
              <button onClick={() => onEdit(book)} className="edit">Edit</button>
              <button onClick={() => onDelete(book.id)} className="delete">Delete</button> {/* Use id for delete */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;
