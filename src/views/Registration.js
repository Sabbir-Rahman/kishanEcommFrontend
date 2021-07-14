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
import { useHistory } from 'react-router';

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fullname, setFullname] = useState("")
    const [confpassword, setConfpassword] = useState("")
    let history = useHistory()
  
    async function signUp() {
      const user = { fullname, email, password, confpassword }
  
      // axios
      const options = {
        url: "http://127.0.0.1:5000/auth/register",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        data: user,
      }
  
      axios(options)
        .then((response) => {
          //redirect to login page
          console.log(response);
  
        })
        .catch((error) => {
          window.location.href="/register"
        });
    }
    return(
            <div className="SignInAndUp">
                <thread>
                    <tr>
                        <th>
                <Container fluid>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h4">যোগ দিন</Card.Title>
                            <p className="card-category">
                                <a  href=""
                                    rel=""
                                    target=""
                                >
                                    গুগল অ্যাকাউন্ট .
                                </a>
                                ব্যবহার করুন
                            </p>
                        </Card.Header>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="fullname">                                    
                                    <Form.Label>নাম</Form.Label>
                                    <Form.Control type="email" placeholder="আপনার নাম এখানে লিখুন" />
                                </Form.Group>
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
                                <Form.Group controlId="confPassword">
                                    <Form.Label> কনফার্ম পাসওয়ার্ড</Form.Label>
                                    <Form.Control type="password" placeholder="আপনার পাসওয়ার্ডটি পুনরায় এখানে লিখুন" />
                                </Form.Group>
                                <div className="SignupButton">
                                    <Button variant="success"  onClick={signUp}>সাইন আপ</Button>
                                </div>
                            </Form>
                            <p className="card-category">
                            <p>
                                একাউন্ট আছে?
                            </p>
                            <a  href="/ecomm/login"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                            প্রবেশ করুন।
                            </a>
                            </p>
                        </Card.Body>
                    </Card>
                </Container>
                
                </th>
                    </tr>
                </thread>
            </div>
    )
}

export default Register