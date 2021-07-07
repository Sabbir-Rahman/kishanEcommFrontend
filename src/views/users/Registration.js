import React from 'react'
import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import axios from "axios";
import { Redirect } from "react-router";
import { Link, Router, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Registration = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [confpassword, setConfpassword] = useState("");
  let history = useHistory();

  async function signUp() {
    const user = { fullname, email, password, confpassword };

    // axios
    const options = {
      url: "http://127.0.0.1:5000/auth/register",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: user,
    };
    axios(options)
      .then((response) => {
        //redirect to login page
        console.log(response);

      })
      .catch((error) => {
        // redirect to register page
       
      });
  }
    return(
        <div>
            <Navbar />
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
                <Link to="/register">জাতীয় পরিচয়পত্র দিয়ে</Link>
              </Message>
              <Message color="olive">
                <Link to="/register">গুগল একাউন্ট দিয়ে</Link>
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
            <Footer />
        </div>    
    )
}

export default Registration