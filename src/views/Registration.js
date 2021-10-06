import React from 'react'
import {
  Button,
  Card,
  Container,
  Form,
} from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullname, setFullname] = useState('')
  const [confpassword, setConfpassword] = useState('')
  let history = useHistory()

  const resetFields = () => {
    setFullname('')
    setEmail('')
    setPassword('')
    setConfpassword('')
  }

  async function signUp() {
    const user = {
      fullname: fullname,
      email: email,
      password: password,
      confpassword: confpassword,
    }
    try {
      const response = await axios.post(
        'http://127.0.0.1:5000/auth/register',
        user
      )
      console.log(response.data)
      history.push('/login')
    } catch (error) {
      alert('try again..')
      history.push('/register')
    }
    resetFields()
  }
  return (
    <div className='SignInAndUp'>
      <thread>
        <tr>
          <th>
            <Container fluid>
              <Card>
                <Card.Header>
                  <Card.Title as='h4'>যোগ দিন</Card.Title>
                  <p className='card-category'>
                    <a href='' rel='' target=''>
                      গুগল অ্যাকাউন্ট .
                    </a>
                    ব্যবহার করুন
                  </p>
                </Card.Header>
              </Card>
              <Card>
                <Card.Body>
                  <Form>
                    <Form.Group controlId='fullname'>
                      <Form.Label>নাম</Form.Label>
                      <Form.Control
                        type='email'
                        placeholder='আপনার নাম এখানে লিখুন'
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group controlId='email'>
                      <Form.Label>ইমেইল</Form.Label>
                      <Form.Control
                        type='email'
                        placeholder='আপনার ইমেইল অ্যাড্রেসটি এখানে লিখুন'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <Form.Text className='text-muted'>
                        আপনার ইমেইলটি কখনোই কারও সাথে শেয়ার করা হবে না।
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId='password'>
                      <Form.Label>পাসওয়ার্ড</Form.Label>
                      <Form.Control
                        type='password'
                        placeholder='আপনার পাসওয়ার্ডটি এখানে লিখুন'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group controlId='confPassword'>
                      <Form.Label> কনফার্ম পাসওয়ার্ড</Form.Label>
                      <Form.Control
                        type='password'
                        placeholder='আপনার পাসওয়ার্ডটি পুনরায় এখানে লিখুন'
                        value={confpassword}
                        onChange={(e) => setConfpassword(e.target.value)}
                      />
                    </Form.Group>
                    <div className='SignupButton'>
                      <Button variant='success' onClick={signUp}>
                        সাইন আপ
                      </Button>
                    </div>
                  </Form>
                  <p className='card-category'>
                    <p>একাউন্ট আছে?</p>
                    <a href='/login' rel='noopener noreferrer' target='_blank'>
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