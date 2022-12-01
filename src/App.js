import "./App.css";
import User from "./User";

function App() {
  // TERNARY OPERATORS
  // const age = 15;
  // const isGreen = false;

  // return (
  //   <div className="App">
  //     {age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
  //     <h1 style={{ color: isGreen ? "green" : "red" }}>THIS HAS COLOR</h1>

  //     {isGreen && <button>BUTTON</button>}
  //   </div>
  // );

  // LIST (LIST OF OBJECTS)
  const users = [
    { name: "Tessy", age: 12 },
    { name: "Mark", age: 16 },
    { name: "Ben", age: 19 },
  ];

  return (
    <div className="App">
      {users.map((user, key) => {
        return <User name={user.name} age={user.age} />;
      })}
    </div>
  );
}

export default App;
