import React from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const resetFields = () => {
    setEmail('')
    setPassword('')
  }

  async function handleSubmit() {
    const user = { email: email, password: password }
    try {
      const response = await axios.post(
        'http://127.0.0.1:5000/auth/login',
        user
      )

      if (response.status == 200) {
        localStorage.setItem('user', JSON.stringify(response.data.token))
        localStorage.setItem(
          'user_role',
          JSON.stringify(response.data.result.user_role)
        )
        const role = localStorage.getItem('user_role')
        console.log(role)
        if (role == '"admin"') {
          history.push('/admin')
        } else {
          history.push('/user/dashboard')
        }
      }
    } catch (error) {
      alert('try again..')
      history.push('/login')
    }
    resetFields()
  }
  return (
    <div className='SignInAndUp'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Container fluid>
          <Card>
            <Card.Header>
              <Card.Title as='h4'>প্রবেশ করুন</Card.Title>
              <p className='card-category'>
                <a href='' rel='' target=''>
                  গুগল অ্যাকাউন্ট .
                </a>
                ব্যবহার করুন
              </p>
            </Card.Header>
          </Card>
          <Card id='myForm1'>
            <Card.Body>
              <Form>
                <Form.Group controlId='email'>
                  <Form.Label>ইমেইল</Form.Label>
                  <Form.Control
                    type='email'
                    name='email'
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
                    name='password'
                    placeholder='আপনার পাসওয়ার্ডটি এখানে লিখুন'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <div className='SignipButton'>
                  <Button variant='success' onClick={handleSubmit}>
                    সাইন ইন
                  </Button>
                </div>
              </Form>
              <p>একাউন্ট নেই?</p>
              <p className='card-category'>
                <a href='/register' rel='noopener noreferrer' target='_blank'>
                  নতুন একাউন্ট তৈরি করুন
                </a>
              </p>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  )
}

export default Login
