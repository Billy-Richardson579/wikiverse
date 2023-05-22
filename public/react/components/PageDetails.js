import React from 'react';

export const PageDetails = ({ page, onBackToList, onDelete }) => {
  const { title, author, email, content, tags, createdAt } = page;

  const tagsString = Object.keys(tags).join(', ');

  const handleDelete = () => {
    onDelete(page.slug);
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Author: {author.name}</p>
      <p>Email: {author.email}</p>
      <p>Tags: {tagsString}</p>
      <p>Date: {createdAt}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={onBackToList}>Back to Wiki List</button>
    </div>
  );
};


