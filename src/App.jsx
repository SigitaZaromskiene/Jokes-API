import "./App.scss";
import { useState, useEffect } from "react";
import List from "./Components/List";
import axios from "axios";
import ErrorMessage from "./Components/ErrorMessage";

function App() {
  const [jokesList, setJokesList] = useState(null);
  const [message, setMessage] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get("https://v2.jokeapi.dev/joke/Programming")
  //     .then((res) => setJokesList(res.data.jokes))
  //     .catch((err) => setMessage(err.message));
  // }, [jokesList]);

  console.log(message);

  useEffect(() => {
    jokesRendering();
  }, []);

  async function jokesRendering() {
    try {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?amount=10"
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error("No page found");
      } else {
        setJokesList(data);
      }
    } catch (error) {
      setMessage(error.message);
    }
  }

  return (
    <>
      <div className="app-container">
        <div className="content">
          {message ? <ErrorMessage text={message}></ErrorMessage> : null}
          <h3>Jokes of the day</h3>
          <div className="border"></div>
        </div>

        {jokesList ? <List jokesList={jokesList.jokes}></List> : null}
      </div>
    </>
  );
}

export default App;
