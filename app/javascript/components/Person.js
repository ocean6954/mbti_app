import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router"; // eslint-disable-line import/no-extraneous-dependencies

const Person = ({ persons }) => {
  const { id } = useParams();
  const person = persons.find((e) => e.id === Number(id));

  return (
    <div className="personContainer">
      <h2>
        {person.name}
        <br />
        {person.mbti_types}
      </h2>
    </div>
  );
};

Person.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      mbti_type: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Person;
