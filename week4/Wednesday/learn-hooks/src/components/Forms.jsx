import React from "react";
import UseForm from "../hooks/UseForm";

const Forms = () => {
  const { values, handleChange, resetForm } = UseForm({
    username: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login Data", values);
    resetForm();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>사용자명 : </label>
      <input
        type="text"
        name="username"
        value={values.name}
        onChange={handleChange}
      />
      <label>비밀번호 : </label>
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submmit">로그인</button>
    </form>
  );
};

export default Forms;
