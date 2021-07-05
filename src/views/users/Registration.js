import React, { useState } from "react";
import { Button, Form, Grid, Message, Segment } from "semantic-ui-react";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [confpassword, setConfpassword] = useState("");

  async function signUp() {
    const user = { fullname, email, password, confpassword };

    let result = await fetch("http://127.0.0.1:5000/auth/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        accepted: "application/json",
      },
    });

    result = await result.json();
    console.warn("result", result);
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
              <h1>একাউন্ট খুলুন</h1>
              <Message color="olive">
                <a href="/register">জাতীয় পরিচয়পত্র দিয়ে</a>
              </Message>
              <Message color="olive">
                <a href="/register">গুগল একাউন্ট দিয়ে</a>
              </Message>
              <h3>অথবা ইমেইল/ফোন নাম্বার দিয়ে একাউন্ট খুলুন</h3>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="নাম"
                name={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="ইমেইল"
                name={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="পাসওয়ার্ড"
                name={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="কনফার্ম পাসওয়ার্ড"
                name={confpassword}
                type="password"
                onChange={(e) => setConfpassword(e.target.value)}
              />
              <Button color="green" fluid size="large" onClick={signUp}>
                একাউন্ট খুলুন
              </Button>
            </Segment>
          </Form>
          <Message>
            একাউন্ট আছে?
            <Button color="green" fluid size="tiny">
              প্রবেশ করুন
            </Button>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Registration;
