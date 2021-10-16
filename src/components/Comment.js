import { useState, useEffect } from 'react'
import post from 'api/PostAPI'
import { Button, Card, Row, Form, Table } from 'react-bootstrap'
import axios from 'axios'

const Comment = () => {
  const [userComment, setUserComment] = useState('')
  const [comments, setComments] = useState([])
  const productID = localStorage.getItem('productID')

  const ShowComment = async () => {
    const token = localStorage.getItem('user')
    if (token) {
      const _token = token.split('"').join('')
      const config = {
        headers: {
          Authorization: `Bearer ${_token}`,
        },
      }

      axios
        .get(
          'http://127.0.0.1:5000/product/comment?productId=' + productID,
          config
        )
        .then((res) => {
          if (res.data.message == 'Comment fetch succesfylly') {
            console.log('comment fetched!')
            console.log(res.data.comments.comments)
            setComments(res.data.comments.comments)
          } else {
            console.log('No comment')
          }
        })
        .catch((err) => {
          console.log('AXIOS ERROR: ', err)
        })
    }
  }

  const DoComment = (cmmnt) => {
    const _ID = {
      productId: productID,
      comment: cmmnt,
    }
    post(_ID, 'কমেন্ট সম্পন্ন হয়েছে', 'http://127.0.0.1:5000/product/comment')
  }

  console.log(comments)

  useEffect(async () => {
    ShowComment()
  }, [])

  let comment = []

  if (comments != undefined) {
    comments.map((c) => {
      comment.push(
        <tr>
          <td>{c.userName}</td>
          <td>{c.comments}</td>
        </tr>
      )
    })
  }

  if (localStorage.getItem('user')) {
    return (
      <Row>
        <Card style={{ width: '100%', margin: '1%' }}>
          <Card.Title as='h4'>মন্তব্যসমূহ</Card.Title>
          <Card.Body>
            <Table className='table-hover table-striped'>
              <tbody>{comment}</tbody>
            </Table>
            <Row style={{ marginLeft: '0%' }}>
              {' '}
              <Form style={{ width: '99%' }}>
                <Form.Group controlId='comment'>
                  <Form.Control
                    type='text'
                    placeholder='মন্তব্য করুন'
                    size='sm'
                    value={userComment}
                    onChange={(e) => setUserComment(e.target.value)}
                  />
                </Form.Group>
                <Button
                  style={{ marginLeft: '92%' }}
                  className='btn-round btn-fill'
                  variant='info'
                  size='sm'
                  value={userComment}
                  onClick={(e) => DoComment(e.target.value)}
                >
                  মন্তব্য করুন
                </Button>
              </Form>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    )
  } else {
    return <></>
  }
}

export default Comment
