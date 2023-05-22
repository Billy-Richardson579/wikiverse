import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { PageDetails } from './PageDetails'; // Import the PageDetails component
import { Form } from './Form';
// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {
  const [isAddingArticle, setIsAddingArticle] = useState(false);
  const [pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null); // Add new state for selected page

  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
      const pagesData = await response.json();
      setPages(pagesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  async function fetchPageDetails(slug) {
    try {
      const response = await fetch(`${apiURL}/wiki/${slug}`);
      const pageData = await response.json();
      setSelectedPage(pageData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchPages();
  }, []);

  function handlePageClick(slug) {
    fetchPageDetails(slug);
  }

  function handleBackToList() {
    setSelectedPage(null);
  }

  function handleAddArticleClick() {
    setIsAddingArticle(true);
  }

  function handleCancelAddArticle() {
    setIsAddingArticle(false);
  }

  async function handleFormSubmit(data) {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer my-token',
          'My-Custom-Header': 'foobar'
        },
        body: JSON.stringify(data)
      };
      const response = await fetch(`${apiURL}/wiki/`, requestOptions);
      const newPage = await response.json();
      setPages([...pages, newPage]);
      setIsAddingArticle(false);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }



  return (
    <main>
      <h1>WikiVerse</h1>
      {selectedPage ? (
        <PageDetails
          page={selectedPage}
          onBackToList={handleBackToList}
          onDelete={handleDeletePage}
        />
      ) : isAddingArticle ? (
        <Form onCancel={handleCancelAddArticle} onSubmit={handleFormSubmit} />
      ) : (
        <>
          <button onClick={handleAddArticleClick}>Add Article</button>
          <h2>An interesting 📚</h2>
          <PagesList pages={pages} onPageClick={handlePageClick} />
        </>
      )}
    </main>
  );
};
