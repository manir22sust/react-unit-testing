import React from "react";

const TestUserInteractions = () => {
  return (
    <div>
      <input placeholder="Enter Name" />
      <input placeholder="Enter Description" />
      <label htmlFor="password">Enter Password </label>
      <input type="password" id="password" />

      <button>Submit</button>
      <button>Apply</button>
    </div>
  );
};

export default TestUserInteractions;
