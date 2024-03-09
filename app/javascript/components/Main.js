import React, { useState, useEffect } from "react";
import Header from "./Header";

const Main = () => {
  const [persons, setPersons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await window.fetch("/api/persons");
        if (!response.ok) throw Error(response.statusText);
        const data = await response.json();
        setPersons(data);
      } catch (error) {
        setIsError(true);
        console.error(error);
      }

      setItLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      {isError && <p>Something is wrong. Check the console.</p>}

      {isLoading ? <p>Loading...</p> : <p>Loaded...</p>}
    </>
  );
};
