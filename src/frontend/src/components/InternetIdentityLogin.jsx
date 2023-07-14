import * as React from "react";
import { backend } from "../../../declarations/backend";
import { AuthClient } from "@dfinity/auth-client";
import { HttpAgent, Actor, ActorFactory } from "@dfinity/agent";

import Button from '@mui/material/Button';

export default function InternetIdentityLogin() {
  const [user, setUser] = React.useState('');

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
      const greeting = await backend.greet(authClient.getIdentity().getPrincipal().toText());
      setUser(greeting);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Button color="inherit" onClick={handleLogin}>Login</Button>
    </>
  )
}