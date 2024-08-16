// src/components/Authors/AuthorTable.jsx
import React from 'react';

const AuthorTable = ({ authors, onEdit, onDelete }) => {
  return (
    <table className="authortable  table-auto w-full mt-4">
      <thead>
        <tr>
          <th>Name</th>
          <th>Birth Date</th>
          <th>Biography</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {authors.map((author) => (
          <tr key={author.id}> {/* Use id as key */}
            <td>{author.name}</td>
            <td>{author.birthDate}</td>
            <td>{author.biography}</td>
            <td>
              <button onClick={() => onEdit(author)} className="edit">Edit</button>
              <button onClick={() => onDelete(author.id)} className="delete">Delete</button> {/* Use id for delete */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AuthorTable;
