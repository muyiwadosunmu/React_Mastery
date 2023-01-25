import React from "react";
import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [comments, setComments] = useState("");
  const [topic, setTopic] = useState("react");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };
  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };
  const handleSubmit = (event) => {
    alert(`${username} ${comments} ${topic}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label>Comments</label>
        <textarea
          value={comments}
          onChange={handleCommentsChange}
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div>
        <label>Topic</label>
      </div>
      <select value={topic} onChange={handleTopicChange} onSubmit>
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="vue">Vue</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
