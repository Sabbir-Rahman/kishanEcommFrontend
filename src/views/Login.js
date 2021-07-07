import React from 'react'
import {
    Alert,
    Badge,
    Button,
    Card,
    Modal,
    Navbar,
    Nav,
    Container,
    Row,
    Col,
    Form
  } from "react-bootstrap";
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
    return(
            <div style={{ backgroundColor: "#F4FFEE" }}>
                <Container fluid>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h4">প্রবেশ করুন</Card.Title>
                            <p className="card-category">
                                <a  href="https://github.com/EINazare"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    গুগল অ্যাকাউন্ট .
                                </a>
                                ব্যবহার করুন
                            </p>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="email">
                                    <Form.Label>ইমেইল</Form.Label>
                                    <Form.Control type="email" placeholder="আপনার ইমেইল অ্যাড্রেসটি এখানে লিখুন" />
                                    <Form.Text className="text-muted">
                                        আপনার ইমেইলটি কখনোই কারও সাথে শেয়ার করা হবে না।
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="password">
                                    <Form.Label>পাসওয়ার্ড</Form.Label>
                                    <Form.Control type="password" placeholder="আপনার পাসওয়ার্ডটি এখানে লিখুন" />
                                </Form.Group>
                                <Button color="green"  onClick={login}>সাইন ইন</Button>
                            </Form>
                        </Card.Body>
                        <p>
                            একাউন্ট নেই?
                        </p>
                        <p className="card-category">
                            <a  href="https://github.com/EINazare"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                            নতুন একাউন্ট তৈরি করুন
                            </a>
                        </p>
                    </Card>
                </Container>

            </div>
    )
}

export default Login