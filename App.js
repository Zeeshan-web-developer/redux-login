import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./action";
function App() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    var user = {
      username: e.target.elements.username.value,
      password: e.target.elements.password.value,
    };
    console.log(user);

    dispatch(setUser(user));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter yourName" name="username" />
        <br />
        <input type="password" name="password" /> <br />
        <button type="submit">login</button>
      </form>
    </div>
  );
}

export default App;
