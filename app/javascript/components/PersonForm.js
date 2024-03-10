import React from "react";

const PersonForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <section>
      <h2>New Person</h2>
      <form className="personForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            <strong>名前:</strong>
            <input type="text" id="name" name="name" />
          </label>
        </div>
        <div>
          <label htmlFor="mbti_types">
            <strong>MBTI:</strong>
            <input type="text" id="mbti_type" name="mbti_type" />
          </label>
        </div>
        <div>
          <label htmlFor="gender">
            <strong>性別:</strong>
            <input type="text" id="gender" name="gender" />
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
