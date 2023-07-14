import * as React from "react";
import { createRoot } from 'react-dom/client';
import { backend } from "../../declarations/backend";
import { AuthClient } from "@dfinity/auth-client";
import { HttpAgent, Actor, ActorFactory } from "@dfinity/agent";

import Button from '@mui/material/Button';
import '@fontsource-variable/inter';

const App = () => {
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');

  async function doGreet() {
    const greeting = await backend.greet(name);
    setMessage(greeting);
  }

  async function handleLogin(e) {
    e.preventDefault();

    try {
      // create an auth client
      let authClient = await AuthClient.create();

      // start the login process and wait for it to finish
      await new Promise((resolve) => {
        authClient.login({
          identityProvider: process.env.II_URL,
          onSuccess: resolve,
        });
      });

      // call the greet method
      const greeting = await backend.greet(name);
      setMessage(greeting);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div style={{ "fontSize": "30px" }}>
      <div>
        <p>Greetings, from DFINITY!</p>
        <p>
          {" "}
          Type your message in the Name input field, then click{" "}
          <b> Get Greeting</b> to display the result.
        </p>
      </div>
      <div style={{ margin: "30px" }}>
        <input
          id="name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        ></input>
        <button onClick={doGreet}>Get Greeting!</button>
      </div>
      <div>
        Greeting is: "
        <span style={{ color: "blue" }}>{message}</span>"
      </div>
      <Button variant="contained" onClick={handleLogin}>Login World</Button>
      {/* <button id="login" onClick={handleLogin}>Login</button> */}
    </div>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);