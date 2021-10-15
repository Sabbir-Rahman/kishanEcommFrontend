import React from "react"
import {
  Button, Card, Container, Row, Table,
} from "react-bootstrap"
import axios from "axios"
import { useEffect, useState } from 'react'

function Notifications() {

  const [requests, setRequest] = useState([])

  const ShowRequest = async () => {
    const token = localStorage.getItem('user')

    const _token = token.split('"').join('')
    console.log(token)
    const config = {
      headers: {
        Authorization: `Bearer ${_token}`,
      },
    }

    axios
      .get('http://127.0.0.1:5000/notification/view', config)
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res)
        setRequest(res.data)
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err)
      })
  }

  useEffect(async () => {
    ShowRequest()
  }, [])
  let notification = []
  if (requests.data != undefined) {
    notification = requests.data
  }
  console.log(notification)

  let notifications = []

  notification.map((n) => {
    notifications.push(
    <tr>
      <td>{n.message}</td>
    </tr>
    )
  })

  return (
    <>
      <Container fluid>
        <Card>
          <Card.Header>
            <Card.Title as="h4">নোটিফিকেশন</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Table className='table-hover table-striped' borderless variant='dark'>
                <tbody>{notifications}</tbody>
              </Table>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Notifications;