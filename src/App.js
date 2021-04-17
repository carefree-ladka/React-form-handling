import React from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  //storing values
  const [data, setData] = React.useState([]);

  const handleChange = (setter) => (event) => {
    setter(event.currentTarget.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setData((prevState) => [...prevState, { name, password }]);
    //setData([...data, { name, password }]);
    setName("");
    setPassword("");
  };
  return (
    <div className="app">
      <form>
        <input
          placeholder="Name"
          value={name}
          onChange={handleChange(setName)}
        />
        <input
          placeholder="description"
          value={password}
          onChange={handleChange(setPassword)}
        />
        <input type="submit" onClick={handleSubmit} />
      </form>
      {data.map((item) => {
        return (
          <>
            <li>{item.name}</li>
            <li>{item.password}</li>
          </>
        );
      })}
    </div>
  );
}
