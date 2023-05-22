import React from 'react';

export const ArticleData = ({ title, author, content, tags, createdAt, onBackClick }) => {
  return (
    <div>
      <h2>hello</h2>
      <p>Author: {author}</p>
      <p>{content}</p>
      <p>Tags: {tags.join(', ')}</p>
      <p>Date: {createdAt}</p>
      <button onClick={onBackClick}>Back to Wiki List</button>
    </div>
  );
};
