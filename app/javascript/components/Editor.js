import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // eslint-disable-line import/no-extraneous-dependencies
import Header from "./Header";
import PersonList from "./PersonList";
import Person from "./Person";
import PersonForm from "./PersonForm";

const Editor = () => {
  const [persons, setPersons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/persons");
        if (!response.ok) throw Error(response.statusText);
        const data = await response.json();
        setPersons(data);
      } catch (error) {
        setIsError(true);
        console.error(error);
      }

      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="grid">
        {isError && <p>Something is wrong. Check the console.</p>}
        {isLoading ? (
          <p className="loading">Loading...</p>
        ) : (
          <>
            <PersonList persons={persons} />
            <Routes>
              <Route path="new" element={<PersonForm />} />
              <Route path=":id" element={<Person persons={persons} />} />
            </Routes>
          </>
        )}
      </div>
    </>
  );
};

export default Editor;
