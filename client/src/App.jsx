import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUserName] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/getusers").then((response) => {
      setListOfUsers(response.data);
      console.log(response.data);
    });
  }, []);

  const createUser = () => {
    axios
      .post("http://localhost:3001/createuser", {
        name,
        age,
        username,
      })
      .then(() => {
        alert("User created succesfully!");
      });
  };

  return (
    <>
      <div className="usersDisplay">
        {listOfUsers.map((user) => {
          return (
            <div className="usersDisplayCard">
              <p>Id: {user._id}</p>
              <p>Name: {user.name}</p>
              <p>Age: {user.age}</p>
              <p>Username: {user.username}</p>
            </div>
          );
        })}
      </div>
      <div className="form">
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <button onClick={createUser}>Create User</button>
      </div>
    </>
  );
}

export default App;
