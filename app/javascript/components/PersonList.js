import React from "react";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom"; // eslint-disable-line import/no-extraneous-dependencies

const PersonList = ({ persons }) => {
  const renderPersons = (personArray) =>
    personArray.map((person) => (
      <li key={person.id}>
        <NavLink to={`/persons/${person.id}`}>
          {person.name}
          <br />
          {person.mbti_types}
          <br />
          {person.gender}
        </NavLink>
      </li>
    ));
  return (
    <section className="personList">
      <h2>
        Persons
        <Link to="/persons/new">New Person</Link>
      </h2>
      <ul>{renderPersons(persons)}</ul>
    </section>
  );
};

PersonList.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      mbti_types: PropTypes.string,
      gender: PropTypes.string,
    }),
  ).isRequired,
};

export default PersonList;
