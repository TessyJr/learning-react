import "./App.css";

function App() {
  return (
    <div className="App">
      <User name="Tessy" age={19} email="tessy@email.com" />
      <User name="Mark" age={20} email="mark@email.com" />
      <User name="Jake" age={21} email="jake@email.com" />
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
};

export default App;
