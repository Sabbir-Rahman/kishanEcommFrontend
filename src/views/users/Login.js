import React from "react";
import { Button, Form, Grid, Message, Segment } from "semantic-ui-react";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    const user = { email, password };

    // axios
    const options = {
      url: "http://127.0.0.1:5000/auth/login",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: user,
    };
    axios(options)
      .then((response) => {
        console.warn("varified");
      })
      .catch((error) => {
        // redirect to login
        console.warn("Not varified");
      });
  }
  return (
    <div style={{ backgroundColor: "#F4FFEE" }}>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Form size="large">
            <Segment stacked>
              <h1>প্রবেশ করুন</h1>
              <Message color="olive">
                <a href="/login">গুগল একাউন্ট দিয়ে</a>
              </Message>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="ইমেইল"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="পাসওয়ার্ড"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button color="green" fluid size="large" onClick={login}>
                প্রবেশ করুন
              </Button>
            </Segment>
          </Form>
          <Message>
            একাউন্ট নেই?
            <Button
              color="green"
              fluid
              size="tiny"
              onClick={(event) => (window.location.href = "/register")}
            >
              একাউন্ট খুলুন
            </Button>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Login;
