import React, { useState, useEffect } from "react";

const PersonForm = () => {
  const [person, setPerson] = useState({
    name: "",
    mbti_types: "",
    gender: "",
  });

  const [mbtiOptions, setMbtiOptions] = useState([]);
  const [genderOptions, setGenderOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/persons/new");
        if (!response.ok) throw Error(response.statusText);
        const data = await response.json();
        setMbtiOptions(data.mbti_options);
        setGenderOptions(data.gender_options);
      } catch (error) {
        console.error("データ取得に失敗");
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { target } = e;
    // console.log("targetNameの中身");
    const { targetName } = target;
    // console.log({ targetName });
    // console.log("valueの中身");
    const { value } = target;
    // console.log({ value });
    // console.log("-------------------------------");

    setPerson({ ...person, [targetName]: value });
  };

  const validatePerson = () => {
    const errors = {};

    if (person.name === "") {
      errors.name = "名前を入力してください";
    }
    if (person.mbti_types === "") {
      errors.mbti_types = "MBTIタイプを入力してください";
    }
    if (!Object.values(genderOptions).includes(person.gender)) {
      errors.gender = "性別を選択してください";
    }
    return errors;
  };

  const isEmptyObject = (obj) => Object.keys(obj).length === 0;

  const renderErrors = () => {
    if (isEmptyObject(formErrors)) {
      return null;
    }

    return (
      <div className="errors">
        <h3>エラー内容を解消して再度フォームを送信してください</h3>
        <ul>
          {Object.values(formErrors).map((formError) => (
            <li key={formError}>{formError}</li>
          ))}
        </ul>
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validatePerson(person);
    if (!isEmptyObject(errors)) {
      setFormErrors(errors);
    } else {
      console.log(person);
    }
  };

  return (
    <section>
      {renderErrors()}

      <h2>New Person</h2>
      <form className="personForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            <strong>名前:</strong>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleInputChange}
              placeholder="名前を入力してください（ニックネーム可）"
            />
          </label>
        </div>
        <div>
          <label htmlFor="mbti_type">
            <strong>MBTI:</strong>
            <select
              id="mbti_type"
              name="mbti_type"
              onChange={handleInputChange}
            >
              <option value="" disabled selected style={{ display: "none" }}>
                MBTIタイプを選択してください
              </option>
              {mbtiOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="gender">
            <strong>性別:</strong>
            <select id="gender" name="gender" onChange={handleInputChange}>
              <option value="" disabled selected style={{ display: "none" }}>
                性別を選択してください
              </option>
              {genderOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="form-actions">
          <button type="submit">保存</button>
        </div>
      </form>
    </section>
  );
};

export default PersonForm;
